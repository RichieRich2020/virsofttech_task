import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  let [state, setState] = useState([]);

  function addhandle(obj) {
    let array = [...state];
    let flag = true;
    if (array.length > 0) {
      for (let ele of array) {
        if (ele.name == obj.name) {
          ele.qty = ele.qty + obj.qty;
          ele.price = ele.price + obj.price;

          flag = false;
        }
      }
      if (flag) {
        array.push(obj);
      }
    } else {
      array.push(obj);
    }

    setState([...array]);
  }
  return (
    <>
      <Cards addhandle={addhandle} />
      <Cart state={state} />
    </>
  );
}

export default App;
