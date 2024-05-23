import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [productTitle, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setProductImage] = useState("");
  
  const [isTitileValid, setTitleValid] = useState(true);
  const [isPriceValid, setPriceValid] = useState(true);
  const [isImageValid, setImageValid] = useState(true);

  //   const [productData, setProductData] = useState({
  //     productName: "",
  //     productPrice: "",
  //     productImage: "",
  //   });

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
    setTitleValid(true);
    // setProductData({
    //   ...productData,
    //   productName: event.target.value,
    // });
    // setProductData((prevState) => {
    //   return { ...prevState, productName: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
    setPriceValid(true);
    // setProductData({
    //   ...productData,
    //   productPrice: event.target.value,
    // });
    // setProductData((prevState) => {
    //   return { ...prevState, productPrice: event.target.value };
    // });
  };
  const imageChangeHandler = (event) => {
    setProductImage(event.target.value);
    setImageValid(true);
    // setProductData({
    //   ...productData,
    //   productImage: event.target.value,
    // });
    // setProductData((prevState) => {
    //   return { ...prevState, productImage: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); /* sayfanın yenilenmemei için*/

    if (productTitle.trim().length === 0) {
      //trim boşlukları siler
      setTitleValid(false);
      return;
    }
    if (productPrice.trim().length === 0) {
      //trim boşlukları siler
      setPriceValid(false);
      return;
    }
    if (imageUrl.trim().length === 0) {
      //trim boşlukları siler
      setImageValid(false);
      return;
    }

    const newProductData = {
      id: props.products + 1,
      productTitle,
      productPrice,
      imageUrl,
    };

    //props.setProducts((prevState)=>[...prevState,newProductData]);
    //props.setProducts([newProductData, ...props.products]);

    props.onSaveProduct(newProductData);

    console.log(newProductData);
    setProductName("");
    setProductPrice("");
    setProductImage("");
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className={`product-form-input ${!isTitileValid ? "invalid" : ""}`}>
        <label>Ürün Adı: </label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz"
          onChange={titleChangeHandler}
          value={productTitle}
          style={{
            backgroundColor: !isTitileValid ? "red" : "",
          }}
        ></input>
        <h6 className={`product-form-input-h6 ${!isTitileValid ? "invalid-h6" : ""}`}>Boş Bırakılamaz</h6>
      </div>
      <div className={`product-form-input ${!isPriceValid ? "invalid" : ""}`}>
        <label>Ürün Fiyatı: </label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz"
          onChange={priceChangeHandler}
          value={productPrice}
          style={{
            backgroundColor: !isPriceValid ? "red" : "",
          }}
        ></input>
        <h6 className={`product-form-input-h6 ${!isPriceValid ? "invalid-h6" : ""}`}>Boş Bırakılamaz</h6>
      </div>
      <div className={`product-form-input ${!isImageValid ? "invalid" : ""}`}>
        <label>Ürün Görseli:</label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz"
          onChange={imageChangeHandler}
          value={imageUrl}
          style={{
            backgroundColor: !isImageValid ? "red" : "",
          }}
        ></input>
        <h6 className={`product-form-input-h6 ${!isImageValid ? "invalid-h6" : ""}`}>Boş Bırakılamaz</h6>
      </div>
      <div className="form-buttons">
        <button className="product-form-button">Ürün Ekle</button>
        <button
          onClick={() => props.setIsOpen(false)}
          className="product-form-button cancel"
          type="button"
        >
          Vazgeç
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
