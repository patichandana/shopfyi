import { CartIcon } from "./icons";

export function TopBar({ productsInCart }) {
  const totalProductsCount = productsInCart.totalProductsCount;
  return (
    <div className="w-screen h-20">
      <div className={totalProductsCount > 0 ? "visible" : "invisible"}>
        <div className="t-0 absolute right-3 top-2">
          <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {totalProductsCount}
          </p>
        </div>
      </div>
      <CartIcon className="file: mt-4 h-10 w-10 right-3 float-right mr-5" />
    </div>
  );
}
