import style from "./Navbar.module.scss";
import { FC } from "react";
import { NavbarItem } from "./NavbarItem";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (): JSX.Element => {
  return (
    <div className={style.NavBar}>
      <NavbarItem title="Treading" param="fetchTreading" />
      <NavbarItem title="Top Rate" param="fetchTopRate" />
    </div>
  );
};

export default Navbar;
