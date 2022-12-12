import React from 'react';
import InfoCheckout from '../InfoCheckout/InfoCheckout';
import InfoChekoutItem from '../InfoChekoutItem/InfoChekoutItem';
import styles from './checkoutContainer.module.css';

const CheckoutContainer = () => {
  return (
    <div className={`inner ${styles.container}`}>
      <InfoCheckout />
      <InfoChekoutItem />
    </div>
  );
};

export default CheckoutContainer;
