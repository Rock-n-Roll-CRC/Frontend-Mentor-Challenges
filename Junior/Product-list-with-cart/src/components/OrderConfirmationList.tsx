import type { Product } from "../shared/interfaces/Product.interface";

import OrderTotal from "./OrderTotal";
import OrderConfirmationListItem from "./OrderConfirmationListItem";

import "../styles/components/_order-confirmation-list.scss";

export default function OrderConfirmationList({
  shoppingCart,
}: {
  shoppingCart: Product[];
}) {
  return (
    <div className="order-confirmation-list">
      <ul className="order-confirmation-list__list">
        {shoppingCart.map((product) => (
          <OrderConfirmationListItem key={product.name} data={product} />
        ))}
      </ul>

      <OrderTotal shoppingCart={shoppingCart} />
    </div>
  );
}
