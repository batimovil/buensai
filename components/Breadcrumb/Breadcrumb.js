import React from 'react';
import styles from './breadcrumb.module.css';
import { useRouter } from 'next/router';

const Breadcrumb = (props) => {
  const router = useRouter();
  return (
    <div>
      <a
        className={styles.breadcrumb}
        onClick={() => {
          router.push('/products');
        }}
      >
        {' '}
        Productos
      </a>
      <span>{' > '}</span>
      {props.product.nombre}
    </div>
  );
};

export default Breadcrumb;
