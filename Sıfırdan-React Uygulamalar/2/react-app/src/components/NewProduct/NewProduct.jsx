import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductForm from "./ProductForm";

const NewProduct = ({ products, setProducts }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const onSaveProduct = (newProductData) => {
    setProducts((prevState) => [newProductData, ...prevState]);
  };
  return (
    <div className="new-product-wrapper">
      {IsOpen ? (
        <ProductForm
          products={products}
          onSaveProduct={onSaveProduct}
          setIsOpen={setIsOpen}
        />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default NewProduct;
