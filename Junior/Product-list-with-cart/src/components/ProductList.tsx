import type { Product } from "../shared/interfaces/Product.interface";
import type { ProductData } from "../shared/interfaces/ProductData.interface";

import ProductListItem from "./ProductListItem";

import "../styles/components/_product-list.scss";

export default function ProductList({
  group,
  data,
  shoppingCart,
  onAddToCart,
  onIncrementProductQuantity,
  onDecrementProductQuantity,
}: {
  group: string;
  data: ProductData[];
  shoppingCart: Product[];
  onAddToCart: (productData: ProductData) => void;
  onIncrementProductQuantity: (productName: string) => void;
  onDecrementProductQuantity: (productName: string) => void;
}) {
  return (
    <article className="product-list">
      <h2 className="product-list__heading">{group}</h2>

      <ul className="product-list__body">
        {data.map((productData) => (
          <ProductListItem
            key={productData.name}
            data={productData}
            shoppingCart={shoppingCart}
            onAddToCart={onAddToCart}
            onIncrementProductQuantity={onIncrementProductQuantity}
            onDecrementProductQuantity={onDecrementProductQuantity}
          />
        ))}
      </ul>
    </article>
  );
}
