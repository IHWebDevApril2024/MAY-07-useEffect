import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="React Logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Bad interval</Link>
        </li>
        <li>
          <Link to="/class-component">Class component</Link>
        </li>
        <li>
          <Link to="/page3">UseEffect</Link>
        </li>
        <li>
          <Link to="/page4">Update</Link>
        </li>
        <li>
          <Link to="/page5">Characters</Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Navbar;
