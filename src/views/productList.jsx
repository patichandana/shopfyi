// import * as productsData from "@/src/data/products.json";
import productsData from "../data/products.json";
import { Product, ShowProductUpdates } from "../views/product";
import { ToastProvider } from "./hooks/contexts";
import "../index.css";

export function ProductList({ productsInCart, setProductsInCart }) {
  return (
    <ToastProvider>
      <div className="flex">
        {productsData.map((product) => {
          return (
            <Product
              product={product}
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          );
        })}
      </div>
      <ShowProductUpdates />
    </ToastProvider>
  );
}
