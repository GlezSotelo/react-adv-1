import {
  ProductCart,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

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
          <ProductCart.Image className='custom-image' />
          <ProductCart.Title />
          <ProductCart.Buttons />
        </ProductCart>

        <ProductCart product={product} className='bg-dark'>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCart>

        <ProductCart
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCart>
      </div>
    </div>
  );
};
