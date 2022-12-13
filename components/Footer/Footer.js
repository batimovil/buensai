import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={`${styles['footer_container']}`}>
      <div>
        <a href="https://www.facebook.com" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            className={`${styles['color']} ${styles['space-icons']} ${styles['facebook']}`}
          />
        </a>
        <a href="https://www.instagram.com" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${styles['color']} ${styles['instagram']}`}
          />
        </a>
      </div>
      <h2 className={`${styles['title']} ${styles['color']}`}>BUENSAI</h2>
      <p className={`${styles['subtitle']} ${styles['color']}`}>
        BUENSAI 2022 © | Todos los derechos reservados
      </p>
    </div>
  );
};

export default Footer;
