import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg"

const Navbar = ({ count }) => {
  return (
    <nav className="nav">
      <NavLink to="products" className="link">Products</NavLink>
      <NavLink to="cart" className="link">
        <CgShoppingCart />
        <span className="basket-count">{count}</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;