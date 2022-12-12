import React, { useState } from 'react';
import styles from './infoChekout.module.css';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import ItemCheckout from '../ItemCheckout/ItemCheckout';
import { useRouter } from 'next/router';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';

const InfoChekoutItem = () => {
  const cart = useContext(CartContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className={styles['container']}>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles['modal']}>
          <h2>Orden recibida!</h2>
          <p>Gracias por tu compra, en breve nos comunicaremos con vos.</p>
          <button
            onClick={() => {
              router.push('/');
            }}
            className={styles['btn']}
          >
            Inicio
          </button>
        </div>
      </Modal>
      <h2>Productos</h2>
      {cart.cart.map((item) => {
        return (
          <ItemCheckout
            key={item.product.id}
            indice={item.product.id}
            image={item.product.urlImage}
            name={item.product.nombre}
            price={item.product.precio}
            quantity={item.quantity}
          />
        );
      })}
      <div className={styles['containerTotal']}>
        <p>Total con envío</p>
        <p className={styles['total']}>${cart.cartTotalPrice()}</p>
      </div>
      <button onClick={onOpenModal} className={styles['btn']}>
        Comprar
      </button>
    </div>
  );
};

export default InfoChekoutItem;
