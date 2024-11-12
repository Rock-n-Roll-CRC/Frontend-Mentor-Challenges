import { useRef, useState } from "react";

import type { Product } from "./shared/interfaces/Product.interface";
import type { ProductData } from "./shared/interfaces/ProductData.interface";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import OrderConfirmation from "./components/OrderConfirmation";

import desserts from "./data/desserts.json";

import "./styles/base/_reset.scss";
import "./styles/base/_general.scss";

export default function App() {
  const [shoppingCart, setShoppingCart]: [
    Product[],
    React.Dispatch<React.SetStateAction<Product[]>>,
  ] = useState<Product[]>([]);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleAddToCart(productData: ProductData) {
    setShoppingCart((shoppingCart) => [
      ...shoppingCart,
      {
        image: productData.image,
        name: productData.name,
        category: productData.category,
        price: productData.price,
        quantity: 1,
      },
    ]);
  }

  function handleIncrementProductQuantity(productName: string) {
    setShoppingCart((shoppingCart) =>
      shoppingCart.map((product) =>
        product.name === productName
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product },
      ),
    );
  }

  function handleDecrementProductQuantity(productName: string) {
    setShoppingCart((shoppingCart) =>
      shoppingCart.reduce(
        (accum: Product[], product) =>
          product.name === productName
            ? product.quantity > 1
              ? [...accum, { ...product, quantity: product.quantity - 1 }]
              : [...accum]
            : [...accum, { ...product }],
        [],
      ),
    );
  }

  function handleRemoveItem(item: Product) {
    setShoppingCart((shoppingCart) =>
      shoppingCart.filter((product) => product !== item),
    );
  }

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }

    if (dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close();
    } else {
      dialogRef.current.showModal();
    }
  }

  return (
    <main>
      <ProductList
        group="Desserts"
        data={desserts}
        shoppingCart={shoppingCart}
        onAddToCart={handleAddToCart}
        onIncrementProductQuantity={handleIncrementProductQuantity}
        onDecrementProductQuantity={handleDecrementProductQuantity}
      />

      <ShoppingCart
        shoppingCart={shoppingCart}
        onRemoveItem={handleRemoveItem}
        onToggleDialog={toggleDialog}
      />

      <OrderConfirmation
        reference={dialogRef}
        shoppingCart={shoppingCart}
        onToggleDialog={toggleDialog}
      />
    </main>
  );
}
