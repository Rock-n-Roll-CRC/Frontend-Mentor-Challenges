import type { Product } from "../shared/interfaces/Product.interface";

import "../styles/components/_button-remove-shopping-cart-list-item.scss";

export default function ButtonRemoveShoppingCartListItem({
  item,
  onRemoveItem,
}: {
  item: Product;
  onRemoveItem: (item: Product) => void;
}) {
  return (
    <button
      className="button-remove-shopping-cart-list-item"
      onClick={() => {
        onRemoveItem(item);
      }}
    >
      <svg className="button-remove-shopping-cart-list-item__icon">
        <use
          href={
            new URL("../assets/icons.svg#remove-item", import.meta.url).href
          }
        />
      </svg>
    </button>
  );
}
