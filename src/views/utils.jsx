export function updateLocalStorage(productsInCart) {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}
