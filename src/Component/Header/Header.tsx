import { DarkModeSwitch } from "./DarkModeSwitch";
import style from "./Header.module.scss";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItem: FC<MenuItemProps> = ({ Icon, address, title }): JSX.Element => {
  return (
    <div className={style["Menu-Item"]}>
      <Link href={address}>
        <p>{title}</p>
        <Icon />
      </Link>
    </div>
  );
};

interface HeaderProps {}

const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <div className={style.Header}>
      <div className={style.Menu}>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>

      <div className={style.Logo}>
        <DarkModeSwitch />
        <Link href="/">
          <h2>
            <span>IMDB</span>
            <span>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
