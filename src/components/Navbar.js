import classes from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
const logoImg = (
  <img src={require("../assets/img/logo-car-rental-50.png")} alt="logo"></img>
);

const Navbar = () => {
  return (
    <>
    <ul className={classes.nav__ul}>
      <li className={classes.li__img}>{logoImg}</li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/car-list">Book a car</Link>
      </li>
      <li>
        <Link to="/create-rental">Create Rental</Link>
      </li>
      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
      <li>
        <Link to="/contacts">Contact us</Link>
      </li>
    </ul>
    <Outlet />
    </>
  );
};

export default Navbar;
