import React, { useContext } from "react";
import Rating from "./Rating";
import Card from "../UI/Card";
import "./ProductItem.css";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const CartCtx = useContext(CartContext);

  const { name, description, img, price } = product;

  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}$</span>
      </div>
      <button className="add-to-cart" onClick={() => CartCtx.addItem(product)}>
        Sepete Ekle
      </button>
    </Card>
  );
};

export default ProductItem;
