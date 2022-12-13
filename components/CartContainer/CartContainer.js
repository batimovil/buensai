import styles from './cartcontainer.module.css';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const CartContainer = () => {
  const cart = useContext(CartContext);
  const router = useRouter();

  if (cart.cart.length === 0) {
    return (
      <div className={styles['center']}>
        <h1 className={styles['emptyCart']}>Carrito vacio, ve a comprar o moriré!</h1>
        <button
          className={styles['btn']}
          onClick={() => {
            router.push('/products');
          }}
        >
          Ver productos
        </button>
      </div>
    );
  }

  return (
    <div className={`inner`}>
      <h2 className={`${styles['title']}`}>Carrito</h2>
      {cart.cart.map((item) => {
        return (
          <CartItem
            key={item.product.id}
            indice={item.product.id}
            image={item.product.urlImage}
            name={item.product.nombre}
            price={item.product.precio}
            quantity={item.quantity}
          />
        );
      })}
      <h2 className={`${styles['total']}`}>
        Total con envío <span>${cart.cartTotalPrice()}</span>
      </h2>
      <div className={`${styles['cont_btn']}`}>
        <a
          className={`${styles['btn']}`}
          onClick={() => {
            router.push('/checkout');
          }}
        >
          Continuar compra
        </a>
      </div>
    </div>
  );
};

export default CartContainer;
