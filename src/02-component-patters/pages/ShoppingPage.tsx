import {
  ProductCart,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";

const product: Product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCart product={product}>
          <ProductCart.Image />
          <ProductCart.Title />
          <ProductCart.Buttons />
        </ProductCart>
        <ProductCart product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCart>
      </div>
    </div>
  );
};
