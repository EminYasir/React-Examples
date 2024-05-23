const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">www.BilgisayarGenetiği.com</span> 
      {props.children}
    </div>
  );
};


export default ProductInfo