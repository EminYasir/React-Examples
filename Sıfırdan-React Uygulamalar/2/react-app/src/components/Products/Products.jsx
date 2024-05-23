import ProductItem from "./ProductItem";
import "./Products.css";
//import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  //   const imageUrl =
  //     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqu-LnjO1z4u_00WmZS1ZQSjz7fXYApvQ48fvknJ5F8muWUZKukta00O9R4o-hoYUC7S8B7dycM9BsBXw8AN2CTripwfwRmwAHX8W47X0RAliU9tQ1ffIlnOc&usqp=CAE";
  //   const productTitle = "Soda";
  //   const productPrice = 4;

  const [products, setProducts] = useState([]);

  //console.log(products.length);
  return (
    <div className="product-wrapper">
      <NewProduct products={products} setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {products.length === 0 ? (
          <h2>Hiç ürün Yok </h2>
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} setProducts={setProducts} products={products}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
