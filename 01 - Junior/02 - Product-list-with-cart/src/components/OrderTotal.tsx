import type { Product } from "../shared/interfaces/Product.interface";

import "../styles/components/_order-total.scss";

export default function OrderTotal({
  shoppingCart,
}: {
  shoppingCart: Product[];
}) {
  const orderTotal = shoppingCart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0,
  );

  return (
    <div className="order-total">
      <span className="order-total__heading">Order Total</span>
      <span className="order-total__order-total">${orderTotal.toFixed(2)}</span>
    </div>
  );
}
