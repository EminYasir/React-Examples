import {  NavLink } from "react-router-dom";
import "./MainNavigation.css"

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className={({isActive})=>(isActive ? "active" : undefined)} to="/" end>Home</NavLink> {/** isActive sadece NavLink te var */}
          </li>
          <li>
            <NavLink className={({isActive})=>(isActive ? "active" : undefined)} to="/products" end>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
