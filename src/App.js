import logo from './logo.svg';
// import { ProductList } from '@/src/views/productList';
import { ProductList } from './views/productList';
import { TopBar } from './views/topBar';

import './App.css';
import { useState } from 'react';

function App() {

  const productsInCartCurrentState = JSON.parse(localStorage.getItem("productsInCart")) ?? { "totalProductsCount": 0, "products": {} };
  let [productsInCart, setProductsInCart] = useState(productsInCartCurrentState);

  return (
    <div className="App">
      <TopBar productsInCart={productsInCart}></TopBar>
      <ProductList productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
    </div>
  );
}

export default App;
