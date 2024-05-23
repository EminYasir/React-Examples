import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <Fragment>
      <h1>My Home Page</h1>
      {/* <a href="/products">Go to Products Page</a> */}
      {/* <Link to="/products">Go to Products Page</Link>tekrardan sunucuya gidip tagları almadı refresh yapmadı. göster gizle mantığı oluyor . sadece bir defa taglar çekiiliyr */}
      <button onClick={navigateHandler}>Go to Products Page</button>
      <br></br>
      <span onClick={navigateHandler}>Go to Products By SpanTag</span>{" "}
      {/*herhangi bir elemana onclick ile nasıl yönlendirme yapılır */}
    </Fragment>
  );
};

export default HomePage;
