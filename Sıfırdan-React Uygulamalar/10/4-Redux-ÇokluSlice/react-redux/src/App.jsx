import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import "./App.css";
import { useSelector } from "react-redux";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  const isAuth=useSelector((state)=> state.auth.isAuthenticated)
  return (
    <>
      <Header />
      {!isAuth && <UserForm />}
      {isAuth && <UserProfileCard/>}
      <Counter />
    </>
  );
}

export default App;
