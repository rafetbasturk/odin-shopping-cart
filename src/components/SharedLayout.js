import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout = ({ count }) => {
  return (
    <>
      <Header count={count} />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;