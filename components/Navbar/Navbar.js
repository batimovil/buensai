import React, { useEffect, useState, useContext } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../contexts/CartContext';
import { faSearch, faCartShopping, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import grid from '../../styles/grid.module.css';

const Navbar = ({ page }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const cart = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0);
  //get how many items are in the cart
  useEffect(() => {
    setCartItems(cart.cart.length);
  }, [cart]);

  //useeffect where if open is true then change body style to disable scroll
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  const mobileMenu = () => {
    return (
      <>
        <FontAwesomeIcon
          icon={open ? faClose : faBars}
          onClick={() => {
            setOpen(!open);
          }}
          className={`${styles.bars} ${page.page === 'products' && !open && styles.mobileMenuDark}`}
        />

        <div className={`${open ? styles.open : styles.close} ${styles.mobileMenu}`}>
          <ul>
            <li>
              <button
                onClick={() => {
                  router.push('/cart');
                }}
                className={styles.itemsNav}
              >
                Carrito ( {cartItems} )
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  router.push('/');
                }}
                className={styles.itemsNav}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  router.push('/aboutus');
                }}
                className={styles.itemsNav}
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  router.push('/products');
                }}
                className={styles.itemsNav}
              >
                Productos
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <header className={page.page === 'products' ? styles.navProducts : styles.nav}>
      <nav className={`${styles.menu} ${grid.menu}`}>
        <ul className={styles.menuItems}>
          <li>
            <button
              onClick={() => {
                router.push('/');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/aboutus');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Nosotros
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/products');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Productos
            </button>
          </li>
        </ul>
      </nav>
      <div className={page.page === 'products' ? styles.logoProducts : styles.logo}>
        <a
          onClick={() => {
            router.push('/');
          }}
        >
          BUENSAI
        </a>
      </div>
      <ul className={styles.social}>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/cart');
            }}
            className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 15, color: 'white' }} />
            {''} {cartItems > 0 ? cartItems : <span>&nbsp;</span>}
          </button>
        </li>
      </ul>
      {mobileMenu()}
    </header>
  );
};

export default Navbar;
