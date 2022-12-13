import React from 'react';
//import grid from '../../styles/grid.module.css';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['overlay']}></div>
      <div className={styles['cta']}>
        <h2>Trae paz y armonía a tu hogar</h2>
        <p>Conectáte con la naturaleza</p>
        <a href="#features" role="button" className={styles['btn']}>
          Descúbrelo
        </a>
      </div>
    </div>
  );
};
export default Hero;
