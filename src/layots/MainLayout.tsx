import React, {useState} from 'react';
import axios from "axios";
import FileComponent from "../components/FileComponent";
import ResultComponent from "../components/ResultComponent";
import styles from './main.module.css'

const MainLayout = () => {



  const [result, SetResult] = useState<string | undefined>();

  const handleResult = (result: string) => {
    SetResult(result);
  };


    return (
        <div  className={styles.mainLayout}>
            <FileComponent onResult={handleResult}/>
            <ResultComponent result={result}/>
        </div>
    );
};

export default MainLayout;