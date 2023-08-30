"use client";
import { FC } from "react";
import style from "./Navbar.module.scss";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface NavbarItemProps {
  title: string;
  param: string;
}

export const NavbarItem: FC<NavbarItemProps> = ({
  title,
  param,
}): JSX.Element => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className={style["NavBar-Item"]}>
      <Link href={`/?genre=${param}`}>
        <p className={genre === param ? style.active : ""}>{title}</p>
      </Link>
    </div>
  );
};
