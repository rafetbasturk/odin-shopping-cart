import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({count}) => {
  return (
    <header>
      <Link to="/" className="logo">Everything's here</Link>
      <Navbar count={count} />
    </header>
  );
}

export default Header;