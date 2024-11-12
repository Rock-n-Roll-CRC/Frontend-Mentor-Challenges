import type { Product } from "../shared/interfaces/Product.interface";

import ButtonRemoveShoppingCartListItem from "./ButtonRemoveShoppingCartListItem";

import "../styles/components/_shopping-cart-list-item.scss";

export default function ShoppingCartListItem({
  data,
  onRemoveItem,
}: {
  data: Product;
  onRemoveItem: (item: Product) => void;
}) {
  const total = (data.price * data.quantity).toFixed(2);

  return (
    <div className="shopping-cart-list-item">
      <div className="shopping-cart-list-item__body">
        <h3 className="shopping-cart-list-item__name">{data.name}</h3>

        <div className="shopping-cart-list-item__description-wrapper">
          <span className="shopping-cart-list-item__quantity">
            {data.quantity}x
          </span>
          <span className="shopping-cart-list-item__price">
            @ ${data.price.toFixed(2)}
          </span>
          <span className="shopping-cart-list-item__total">${total}</span>
        </div>
      </div>

      <ButtonRemoveShoppingCartListItem
        item={data}
        onRemoveItem={onRemoveItem}
      />
    </div>
  );
}
