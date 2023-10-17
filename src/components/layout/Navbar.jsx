import { SiNike } from "react-icons/si";
import "../../components/layout/Navbar.css";
import CardWidget from "../common/CardWidget";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <SiNike />
        </Link>
        <ul>
          <Link to="/">
            <li>Nike Word</li>
          </Link>
          <Link to="/category/woman">
            <li>Woman</li>
          </Link>
          <Link to="/category/men">
            <li>Men</li>
          </Link>
          <Link to="/category/children">
            <li>Children</li>
          </Link>
          <Link to="/category/running">
            <li>Running</li>
          </Link>
        </ul>
        <CardWidget />
      </nav>
      <Outlet />
    </div>
  );
};
