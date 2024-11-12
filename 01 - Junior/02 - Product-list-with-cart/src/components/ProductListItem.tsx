import type { Product } from "../shared/interfaces/Product.interface";
import type { ProductData } from "../shared/interfaces/ProductData.interface";

import ButtonAddToCart from "./ButtonAddToCart";
import ButtonCounter from "./ButtonCounter";

import "../styles/components/_product-list-item.scss";

export default function ProductListItem({
  data,
  shoppingCart,
  onAddToCart,
  onIncrementProductQuantity,
  onDecrementProductQuantity,
}: {
  data: ProductData;
  shoppingCart: Product[];
  onAddToCart: (productData: ProductData) => void;
  onIncrementProductQuantity: (productName: string) => void;
  onDecrementProductQuantity: (productName: string) => void;
}) {
  const imageTablet = new URL(
    `../assets/images/${data.image.tablet}`,
    import.meta.url,
  ).href;
  const imageDesktop = new URL(
    `../assets/images/${data.image.desktop}`,
    import.meta.url,
  ).href;
  const imageMobile = new URL(
    `../assets/images/${data.image.mobile}`,
    import.meta.url,
  ).href;

  const product = shoppingCart.find((product) => product.name === data.name);

  return (
    <li
      className={`product-list-item ${product ? "product-list-item--selected" : ""}`}
    >
      <div className="product-list-item__image-wrapper">
        <img
          srcSet={`
          ${imageTablet}  427w,
          ${imageDesktop} 502w,
          ${imageMobile}  654w
          `}
          sizes="(max-width: 47.937rem) 654px, (max-width: 63.937rem) 427px, 502px"
          src={imageMobile}
          alt={data.name}
          className="product-list-item__image"
        />

        {product ? (
          <ButtonCounter
            className="product-list-item__counter"
            product={product}
            onIncrementProductQuantity={onIncrementProductQuantity}
            onDecrementProductQuantity={onDecrementProductQuantity}
          />
        ) : (
          <ButtonAddToCart
            className="product-list-item__add-to-cart"
            onClick={() => {
              onAddToCart(data);
            }}
          />
        )}
      </div>

      <div className="product-list-item__body">
        <span className="product-list-item__category">{data.category}</span>
        <span className="product-list-item__name">{data.name}</span>
        <span className="product-list-item__price">
          ${data.price.toFixed(2)}
        </span>
      </div>
    </li>
  );
}
