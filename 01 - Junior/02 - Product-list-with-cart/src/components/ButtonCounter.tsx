import type { Product } from "../shared/interfaces/Product.interface";

import "../styles/components/_button-counter.scss";

export default function ButtonCounter({
  className,
  product,
  onIncrementProductQuantity,
  onDecrementProductQuantity,
}: {
  className: string;
  product: Product;
  onIncrementProductQuantity: (productName: string) => void;
  onDecrementProductQuantity: (productName: string) => void;
}) {
  return (
    <div className={`button-counter ${className ? className : ""}`}>
      <button
        className="button-counter__button"
        onClick={() => {
          onDecrementProductQuantity(product.name);
        }}
      >
        <svg className={`button-counter__icon`}>
          <use
            href={
              new URL("../assets/icons.svg#decrement-quantity", import.meta.url)
                .href
            }
          />
        </svg>
      </button>

      <span className="button-counter__quantity">{product.quantity}</span>

      <button
        className="button-counter__button"
        onClick={() => {
          onIncrementProductQuantity(product.name);
        }}
      >
        <svg className={`button-counter__icon`}>
          <use
            href={
              new URL("../assets/icons.svg#increment-quantity", import.meta.url)
                .href
            }
          />
        </svg>
      </button>
    </div>
  );
}
