import React from 'react';
import styles from './infoCheckout.module.css';

const InfoCheckout = () => {
  return (
    <div className={`${styles['container']}`}>
      <form>
        <div>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
        </div>
        <input type="tel" placeholder="Telefono" required />
        <input type="text" placeholder="Localidad" required />
        <input type="text" placeholder="Direccion" required />
        <input type="number" placeholder="Codigo postal" required />
        <select placeholder="Formas de pago">
          <option>Tarjeta de credito</option>
          <option>Tarjeta de debito</option>
          <option>Mercado pago</option>
        </select>
        <input type="number" placeholder="Numero de tarjeta" required />
        <div>
          <input
            type="text"
            placeholder="Fecha de expiracion"
            required
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
          />
          <input type="number" placeholder="Codigo de seguridad" required />
        </div>
        <input type="number" placeholder="DNI del titular" required />
      </form>
    </div>
  );
};

export default InfoCheckout;
