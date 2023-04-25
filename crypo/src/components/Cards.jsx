import React from 'react';
import Card from './Card';
import stylecards from './Cards.module.css';
const data = [
  {
    name: 'BTC',
    id: 1,
    price: 25000,
    img: 'https://i.ibb.co/3SMLrjs/bitcoin.png',
  },
  {
    name: 'DOGE',
    id: 2,
    price: 0.07,
    img: 'https://i.ibb.co/WV5vNr2/dogecoin.png',
  },
  {
    name: 'RIPPLE',
    price: 0.45,
    id: 3,
    img: 'https://i.ibb.co/ZMkV65r/ripple.png',
  },
];
const Cards = ({ addhandle }) => {
  return (
    <div id={stylecards.parents}>
      {data.map((ele) => {
        return <Card key={ele.id} {...ele} addhandle={addhandle} />;
      })}
    </div>
  );
};

export default Cards;
