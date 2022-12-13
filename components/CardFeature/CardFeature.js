import React from 'react';
import styles from './cardFeature.module.css';

const CardFeature = (props) => {
  return (
    <div className={styles['card']}>
      <div className={styles['textAndButton']}>
        <p>{props.text}</p>
        <a href="#">Ver mas &gt;</a>
      </div>
    </div>
  );
};

export default CardFeature;
