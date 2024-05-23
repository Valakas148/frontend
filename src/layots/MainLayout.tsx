import React, {useState} from 'react';
import axios from "axios";
import FileComponent from "../components/FileComponent";
import ResultComponent from "../components/ResultComponent";
import styles from './main.module.css'

const MainLayout = () => {

  const [results, setResults] = useState<{ name: string; number: string }[]>([]);

  const handleResults = (results: { name: string; number: string }[]) => {
    setResults(results);
  };


    return (
        <div  className={styles.mainLayout}>
            <FileComponent onResults={handleResults}/>
            <ResultComponent results={results}/>
        </div>
    );
};

export default MainLayout;