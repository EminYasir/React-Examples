import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import FormInputs from "../Form/FormInputs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productItem = products.map((product) => (
    <ProductItem key={product.id} product={product}></ProductItem>
  ));

  // const fetchProductsHandler = () => {
  //   fetch(
  //     "https://my-pos-application-api.onrender.com/api/products/get-all"
  //   ).then((response) => {
  //     return response.json().then((data) => {
  //       const newData=data.map((item)=>{
  //         return {
  //           id:item._id,
  //           name:item.title,
  //           description:item.category,
  //           ...item,
  //         }
  //       })
  //       setProducts(newData)
  //     });
  //   });
  // };

  const fetchProductsHandler = useCallback(async function () {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          description: item.category,
          ...item,
        };
      });
      setProducts(newData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = <p>Found no products!</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (products.length > 0) {
    content = productItem;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <main className="products-wrapper">
      <FormInputs fetchProductsHandler={fetchProductsHandler}/>
      <ul className="products">{content}</ul>
      <button className="button" onClick={fetchProductsHandler}>
        Fetch Products
      </button>
    </main>
  );
};

// return (
//   <main className="products-wrapper">
//     {!isLoading && products.length > 0 && (
//       <ul className="products">{productItem}</ul>
//     )}
//     {!isLoading && error && <p>{error}</p>}
//     {isLoading && <p>Loading...</p>}
//     {!isLoading && products.length === 0 && !error && (
//       <p>Found no products!</p>
//     )}
//     <button className="button" onClick={fetchProductsHandler}>
//       Fetch Products
//     </button>
//   </main>
// );

export default Products;
