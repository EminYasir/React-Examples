import products from "../../productData";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = () => {
  const productItem = products.map((product) => (
    <ProductItem key={product.id} product={product}></ProductItem>
  ));

  
  return (
    <main className="products-wrapper">
      <ul className="products">{productItem}</ul>
    </main>
  );
};

export default Products;
