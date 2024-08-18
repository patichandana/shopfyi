import p1 from "../images/p1.jpeg";
import { updateLocalStorage } from "./utils";
import { CartIcon, CrossIcon } from "./icons";
import { useToast } from "./hooks/product-toast";

export function ShowProductUpdates() {
  const { toastDisplay, toast } = useToast();

  return (
    <div className={"toast " + toastDisplay.display} id="product-status-toast">
      <div className={"alert " + toastDisplay.alert}>
        <button
          type="button"
          onClick={() => {
            toast({ display: "hidden" });
          }}
        >
          <CrossIcon />
        </button>
        <span>{toastDisplay.message}</span>
      </div>
    </div>
  );
}

function handleAddToCart(productId, productsInCart, setProductsInCart, toast) {
  try {
    const totalNumberOfProducts = productsInCart?.totalProductsCount ?? 0;
    let productCount = productsInCart?.products[productId]?.count;

    productsInCart.totalProductsCount = totalNumberOfProducts + 1;

    if (productCount) {
      productsInCart.products[productId].count =
        productsInCart.products[productId].count + 1;
    } else {
      productsInCart.products[productId] = { count: 1 };
    }

    setProductsInCart({ ...productsInCart });
    toast({
      alert: "alert-success",
      display: "visible",
      message: "item added to cart",
      clearAfter: 3000,
    });
    setTimeout(updateLocalStorage(productsInCart), 0);
    return true;
  } catch (err) {
    toast({
      alert: "alert-error",
      display: "visible",
      message: "failed adding item to cart",
      clearAfter: 3000,
    });
    return false;
  }
}

export function Product({ product, productsInCart, setProductsInCart }) {
  const { toast } = useToast();

  return (
    <>
      <div className="max-w-sm min-w-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left m-8">
        <a href="/product">
          <img className="rounded-t-lg" src={p1} alt="product-image" />
        </a>
        <div className="p-5">
          <a href="/product">
            <h6 className="mb-2 text-l tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h6>
          </a>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {product.details}
          </p>
          <button
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              handleAddToCart(
                product.id,
                productsInCart,
                setProductsInCart,
                toast
              );
            }}
          >
            Add to cart
            <CartIcon className={"rtl:rotate-180 w-6 h-6 ms-2"} />
          </button>
        </div>
      </div>
    </>
  );
}
