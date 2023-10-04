import { SiNike } from "react-icons/si";
import "../../components/layout/Navbar.css";
import CardWidget from "../common/CardWidget";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <SiNike />
        <ul>
          <li>Nike Word</li>
          <li>Woman</li>
          <li>Men</li>
          <li>Children</li>
          <li>Sport</li>
        </ul>
        <CardWidget />
      </nav>
    </div>
  );
};
