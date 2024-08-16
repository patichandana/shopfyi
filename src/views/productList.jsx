// import * as productsData from "@/src/data/products.json";
import productsData from "../data/products.json";
import p1 from "../images/p1.jpeg"
import '../index.css';

function Product({product}) {
  return (
    <div className="max-w-sm min-w-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left m-8">
      <a href="#">
        <img className="rounded-t-lg" src={p1} alt="image" />
      </a>
      <div className="p-5">
        <a href="#">
          <h6 className="mb-2 text-l tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h6>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          {product.details}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor" className="rtl:rotate-180 w-6 h-6 ms-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
        </a>
      </div>
    </div>
  );
}

export function ProductList() {
    return (<div className="flex">
        {productsData.map((product) => {
            return <Product product={product}/>
        })}
    </div>);
}
