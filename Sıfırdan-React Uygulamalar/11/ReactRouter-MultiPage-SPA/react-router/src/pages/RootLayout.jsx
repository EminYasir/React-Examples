import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNAvigation";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
