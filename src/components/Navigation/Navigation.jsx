import { Link, NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { useState } from "react";
import { icons } from "../../services/icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.navLeft}>
          <Link to={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
      </div>
      <div className={styles.navRight}>
        <div onClick={toggleNavigation}>{icons.FaBars}</div>
        <div>{icons.FaBasketShopping}</div>
      </div>

      <div className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/kontakt"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Kontakt
        </NavLink>
        <NavLink
          to={"/om"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Om
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Services
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Shop
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;
