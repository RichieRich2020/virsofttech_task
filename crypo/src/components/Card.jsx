import React, { useState } from 'react';
import Cards from './Cards';
import style from './Card.module.css';
const Card = ({ name, price, img, addhandle }) => {
  let [state, setState] = useState(0);
  function some() {
    if (state != 0) {
      addhandle({
        name,
        qty: +state,
        price: +(state * price).toFixed(2),
      });
      setState(0);
    }
  }
  return (
    <div id={style.card}>
      <img src={img} className={style.immg} />
      <h3>{name}</h3>
      <h3>$ {price}</h3>
      <input
        type='number'
        placeholder='QTY'
        style={{ display: 'block', marginBottom: '20px' }}
        onChange={(e) => {
          if (e.target.value >= 0) {
            setState(e.target.value);
          }
        }}
        value={state}
      />
      <button onClick={some}>add to cart</button>
    </div>
  );
};

export default Card;
