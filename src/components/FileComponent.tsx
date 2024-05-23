import React, {FC, useState} from 'react';
import axios from "axios";
import styles from './File.module.css'

interface FileUploadProps {
  onResults: (results: { name: string; number: string }[]) => void;
}

  const FileComponent: React.FC<FileUploadProps> = ({ onResults }) => {
    const [files, setFiles] = useState<FileList | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFiles(e.target.files);
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!files) return;

      const results: { name: string; number: string }[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('audio', file);

        try {
          const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          results.push({ name: file.name, number: response.data.number });
        } catch (error) {
          console.error('Error uploading file:', error);
          results.push({ name: file.name, number: 'Error' });
        }
      }
      onResults(results);
    };

    return (
      <div className={styles.fileUploadContainer}>
        <h1 className={styles.title}>Upload Audio Files</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="file" onChange={handleFileChange} multiple className={styles.input} />
          <button type="submit" className={styles.button}>Upload</button>
        </form>
      </div>
    );
  };

export default FileComponent;