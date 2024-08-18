// import { ProductList } from '@/src/views/productList';
import productsData from "./data/products.json";
import { ProductList } from "./views/productList";
import { TopBar } from "./views/topBar";
import { ProductSummary } from "./views/cartSummary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { useState } from "react";

function App() {
  const productsInCartCurrentState = JSON.parse(
    localStorage.getItem("productsInCart")
  ) ?? { totalProductsCount: 0, products: {} };
  let [productsInCart, setProductsInCart] = useState(
    productsInCartCurrentState
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProductList
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
        />
      ),
    },
    {
      path: "/cart",
      element: <ProductSummary product={productsData[0]} />,
    },
  ]);

  return (
    <div className="App">
      <TopBar productsInCart={productsInCart}></TopBar>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
