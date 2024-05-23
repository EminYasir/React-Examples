import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
    const params=useParams();

  return <Fragment>
    <div>ProductDetail</div>
    <p>{params.productId}</p>
    <Link to=".." relative="path">BACK</Link>
  </Fragment>;
};

export default ProductDetail;
