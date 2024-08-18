import { createContext, useContext, useState } from "react";

const ProductToastDisplayContext = createContext({
  alert: "alert-success",
  display: "hidden",
});

export function useToast() {
  return useContext(ProductToastDisplayContext);
}

export function ToastProvider({ children }) {
  const [toastDisplay, setToastDisplay] = useState({
    alert: "alert-success",
    display: "hidden",
    message: "item added to cart",
  });

  const toast = ({alert, message, display, clearAfter}) => {
    const toastObj = {
      alert: alert,
      display: display,
      message: message
    };

    setToastDisplay(toastObj);

    if (display !== "hidden" && clearAfter != null) {
      setTimeout(() => setToastDisplay({ display: "hidden" }), clearAfter);
    }
  };

  return (
    <ProductToastDisplayContext.Provider value={{ toastDisplay, toast }}>
      {children}
    </ProductToastDisplayContext.Provider>
  );
}
