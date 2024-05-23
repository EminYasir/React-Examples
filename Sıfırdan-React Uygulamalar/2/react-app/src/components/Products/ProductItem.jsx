import { useState } from "react";
import "./ProductItem.css";
import ProductInfo from "./productInfo";
import Counter from "../Counter";

const ProductItem = (props) => {
  const { product } = props;
  console.log(product);
  const { productTitle, imageUrl, productPrice } = product;
  //let title=productTitle;
  const [title, setTitle] = useState(productTitle);
  //soldaki değişken sağdaki değiikeni kullandığımz function
  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(productTitle, " Güncellendi");
  };

  const clickDeleteHandler = () => {
    props.setProducts(props.products.filter((item) => item.id !== product.id));
  };

  const [counter, setCounter] = useState(Number(productPrice));

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt=""></img>
      </div>
      <div className="product-info">
        <ProductInfo>
          <h2>{title}</h2>

          <Counter counter={counter} setCounter={setCounter}>
            <span>{counter} tl</span>
          </Counter>
          <br></br>
          <button onClick={clickHandler}>Güncelle</button>
          <button className="delete" onClick={clickDeleteHandler}>
            Sil
          </button>
        </ProductInfo>
      </div>
    </div>
  );
};

export default ProductItem;
