import type { Product } from "../shared/interfaces/Product.interface";

import ShoppingCartEmptyList from "./ShoppingCartEmptyList";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartCarbonNeutral from "./ShoppingCartCarbonNeutral";
import Button from "./Button";

import "../styles/components/_shopping-cart.scss";

export default function ShoppingCart({
  shoppingCart,
  onRemoveItem,
  onToggleDialog,
}: {
  shoppingCart: Product[];
  onRemoveItem: (item: Product) => void;
  onToggleDialog: () => void;
}) {
  const shoppingCartTotal = shoppingCart.reduce(
    (shoppingCartTotal, product) => shoppingCartTotal + product.quantity,
    0,
  );

  return (
    <article className="shopping-cart">
      <h2 className="shopping-cart__heading">
        Your Cart ({shoppingCartTotal})
      </h2>

      {shoppingCart.length !== 0 ? (
        <>
          <ShoppingCartList
            shoppingCart={shoppingCart}
            onRemoveItem={onRemoveItem}
          />

          <ShoppingCartCarbonNeutral />

          <Button
            className={"shopping-cart__confirm-order"}
            onClick={onToggleDialog}
          >
            Confirm Order
          </Button>
        </>
      ) : (
        <ShoppingCartEmptyList />
      )}
    </article>
  );
}
