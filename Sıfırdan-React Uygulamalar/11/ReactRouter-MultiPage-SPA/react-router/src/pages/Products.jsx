import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "1", title: "Product 1" },
  { id: "2", title: "Product 2" },
  { id: "3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <Fragment>
      <h1>ProductsPage</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.key}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
