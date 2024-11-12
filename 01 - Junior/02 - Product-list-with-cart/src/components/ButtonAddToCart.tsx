import "../styles/components/_button-add-to-cart.scss";

export default function ButtonAddToCart({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`button-add-to-cart ${className ? className : ""}`}
      onClick={onClick}
    >
      <svg className={`button-add-to-cart__icon`}>
        <use
          href={
            new URL("../assets/icons.svg#add-to-cart", import.meta.url).href
          }
        />
      </svg>

      <span className="button-add-to-cart__caption">Add to Cart</span>
    </button>
  );
}
