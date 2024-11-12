import "../styles/components/_shopping-cart-carbon-neutral.scss";

export default function ShoppingCartCarbonNeutral() {
  return (
    <div className="shopping-cart-carbon-neutral">
      <svg className="shopping-cart-carbon-neutral__icon">
        <use
          href={
            new URL("../assets/icons.svg#carbon-neutral", import.meta.url).href
          }
        />
      </svg>

      <p className="shopping-cart-carbon-neutral__description">
        This is a <span>carbon-neutral</span> delivery
      </p>
    </div>
  );
}
