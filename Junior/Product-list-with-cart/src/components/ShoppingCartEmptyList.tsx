import "../styles/components/_shopping-cart-empty-list.scss";

export default function ShoppingCartEmptyList() {
  return (
    <div className="shopping-cart-empty-list">
      <svg className="shopping-cart-empty-list__icon">
        <use
          href={
            new URL("../assets/illustrations.svg#empty-cart", import.meta.url)
              .href
          }
        />
      </svg>

      <span className="shopping-cart-empty-list__caption">
        Your added items will appear here
      </span>
    </div>
  );
}
