import type { Product } from "../shared/interfaces/Product.interface";

import Button from "./Button";
import OrderConfirmationList from "./OrderConfirmationList";

import "../styles/components/_order-confirmation.scss";

export default function OrderConfirmation({
  reference,
  shoppingCart,
  onToggleDialog,
}: {
  reference: React.RefObject<HTMLDialogElement>;
  shoppingCart: Product[];
  onToggleDialog: () => void;
}) {
  return (
    <dialog ref={reference} className="order-confirmation">
      <svg className="order-confirmation__icon">
        <use
          href={
            new URL("../assets/icons.svg#order-confirmed", import.meta.url).href
          }
        />
      </svg>

      <div className="order-confirmation__description-box">
        <h2 className="order-confirmation__heading">Order Confirmed</h2>

        <p className="order-confirmation__description">
          We hope you enjoy your food!
        </p>
      </div>

      <OrderConfirmationList shoppingCart={shoppingCart} />

      <Button className="order-confirmation__button" onClick={onToggleDialog}>
        Start New Order
      </Button>
    </dialog>
  );
}
