import React, {FC} from 'react';
import styles from './Result.module.css'

interface ResultDisplayProps {
  result: string | undefined;
}
const ResultComponent:FC<ResultDisplayProps> = ({result}) => {
    return (
        <div className={styles.resultContainer}>
            {result && <p className={styles.resultText}>Recognized Number: {result}</p>}
        </div>
    );
};

export default ResultComponent;