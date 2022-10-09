import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/Product">Product</Link>
      </li>
      <li>
        <Link to="/About">About us</Link>
      </li>
      <li>
        <Link to="/Contact">contact</Link>
      </li>
    </nav>
  );
};
export default Header;
