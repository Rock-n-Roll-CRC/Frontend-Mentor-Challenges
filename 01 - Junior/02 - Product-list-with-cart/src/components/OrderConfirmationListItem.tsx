import type { Product } from "../shared/interfaces/Product.interface";

import "../styles/components/_order-confirmation-list-item.scss";

export default function OrderConfirmationListItem({ data }: { data: Product }) {
  const imageThumbnail = new URL(
    `../assets/images/${data.image.thumbnail}`,
    import.meta.url,
  ).href;

  const total = (data.price * data.quantity).toFixed(2);

  return (
    <div className="order-confirmation-list-item">
      <div className="order-confirmation-list-item__body">
        <div className="order-confirmation-list-item__image-wrapper">
          <img
            src={imageThumbnail}
            alt={data.name}
            className="order-confirmation-list-item__image"
          />
        </div>

        <div className="order-confirmation-list-item__content">
          <h3 className="order-confirmation-list-item__name">{data.name}</h3>

          <div className="order-confirmation-list-item__description-wrapper">
            <span className="order-confirmation-list-item__quantity">
              {data.quantity}x
            </span>

            <span className="order-confirmation-list-item__price">
              @ ${data.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <span className="order-confirmation-list-item__total">${total}</span>
    </div>
  );
}
