import { Props as ProductCartProps } from "../components/ProductCart";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCartHOCProps {
  (Props: ProductCartProps): JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
