import React, {FC, useState} from 'react';
import axios from "axios";
import styles from './File.module.css'

interface FileUploadProps {
  onResult: (result: string) => void;
}
const FileComponent:FC<FileUploadProps> = ({onResult}) => {


  const [file, SetFile] = useState<File | null>(null);



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      SetFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onResult(response.data.number);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

    return (
        <div className={styles.fileUploadContainer}>
          <h1 className={styles.title}>Upload Audio File</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="file" onChange={handleFileChange} className={styles.input}/>
            <button type="submit" className={styles.button}>Upload</button>
          </form>
        </div>
    );
};

export default FileComponent;