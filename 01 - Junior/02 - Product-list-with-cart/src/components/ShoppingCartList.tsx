import type { Product } from "../shared/interfaces/Product.interface";

import ShoppingCartListItem from "./ShoppingCartListItem";
import OrderTotal from "./OrderTotal";

import "../styles/components/_shopping-cart-list.scss";

export default function ShoppingCartList({
  shoppingCart,
  onRemoveItem,
}: {
  shoppingCart: Product[];
  onRemoveItem: (item: Product) => void;
}) {
  return (
    <>
      <ul className="shopping-cart-list">
        {shoppingCart.map((product) => (
          <ShoppingCartListItem
            key={product.name}
            data={product}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>

      <OrderTotal shoppingCart={shoppingCart} />
    </>
  );
}
