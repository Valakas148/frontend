import React, {FC} from 'react';
import styles from './Result.module.css'

interface ResultDisplayProps {
  results: { name: string; number: string }[];
}

const ResultComponent: React.FC<ResultDisplayProps> = ({ results }) => {
  return (
    <div className={styles.resultContainer}>
      {results.map((result, index) => (
        <p key={index} className={styles.resultText}>
          File: {result.name} - Recognized Number: {result.number}
        </p>
      ))}
    </div>
  );
};
export default ResultComponent;