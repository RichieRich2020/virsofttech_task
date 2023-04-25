import React from 'react';
import stylecart from './Cart.module.css';
const Cart = ({ state }) => {
  console.log(state);
  var sum = state.reduce((acc, curr) => {
    return acc + +curr.price;
  }, 0);
  let stylee = state.length == 0 ? 'none' : 'block';
  return (
    <div>
      <div id={stylecart.cartparent} style={{ display: stylee }}>
        {state.map((e, i) => {
          return (
            <div
              style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
              key={i}>
              <h3>{e.name}</h3>
              <p>QTY -{e.qty}</p>
              <h3>${e.price}</h3>
            </div>
          );
        })}
      </div>
      <h1> grand total : ${sum}</h1>
    </div>
  );
};

export default Cart;
