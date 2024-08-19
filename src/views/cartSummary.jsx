import { useState } from "react";
import p1 from "../images/p1.jpeg";
import { PlusIcon, MinusIcon } from "./icons";
import { ProductList } from "./productList";

export function CartSummary() {
  return (
    <div>
      <ProductSummary product={ProductList[0]}></ProductSummary>
    </div>
  );
}

export function ProductSummary({ product }) {
  let [quantity, setQuantity] = useState();

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <img className="rounded-t-lg w-32 h-32" src={p1} alt="product" />
          <ProductQuantity
            quantity={quantity}
            setQuantity={setQuantity}
            onQuantityChange={(updatedQuantity) => {
              console.log(updatedQuantity, typeof updatedQuantity);
              setQuantity(updatedQuantity);
            }}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

function ProductQuantity({ quantity=1, onQuantityChange, min = 1, max = 999 }) {
  const handleInputChange = (event) => {
    const updatedQ = event.target.value;
    if (
      updatedQ - Math.floor(updatedQ) === 0 &&
      updatedQ >= 0 &&
      updatedQ < 1000
    )
      onQuantityChange(+event.target.value);
  };

  console.log(quantity);
  return (
    <div className="flex flex-row m-4">
      <button
        onClick={() => onQuantityChange(quantity - 1)}
        disabled={quantity === min}
      >
        <MinusIcon
          color={quantity > min ? "dark:text-white" : "dark:text-slate-500"}
        />
      </button>
      <input
        className="w-12 h-8 bg-white box-border text-black text-center"
        value={quantity}
        onChange={handleInputChange}
      ></input>
      <button
        onClick={() => onQuantityChange(quantity + 1)}
        disabled={quantity > max}
      >
        <PlusIcon
          color={quantity > max ? "dark:text-slate-500" : "dark:text-white"}
        />
      </button>
    </div>
  );
}
