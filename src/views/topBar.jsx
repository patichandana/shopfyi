import { CartIcon } from "./icons";
// import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export function TopBar({ productsInCart }) {
  const totalProductsCount = productsInCart.totalProductsCount;
//   const navigate = useNavigate();

  return (
    <div className="w-screen h-20">
      <div className={totalProductsCount > 0 ? "visible" : "invisible"}>
        <div className="t-0 absolute right-8 top-2">
          <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {totalProductsCount}
          </p>
        </div>
      </div>
      <a href="/cart">
        <button className="float-right">
          <CartIcon className="mt-4 h-10 w-10 right-6 float-right mr-10" />
          <span className="float-right right-2 absolute top-8 text-gray-700 dark:text-gray-400 font-bold">
            Cart
          </span>
        </button>
      </a>
    </div>
  );
}
