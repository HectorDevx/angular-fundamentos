export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; // ? Puede o no contener este dato.
}
