import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <h1>Bir hata oluştu!</h1>
      <p>Bu sayfa bulunamadı</p>
      <Link to="/">Ana Sayfaya Git</Link>
    </main>
  );
};

export default ErrorPage;
