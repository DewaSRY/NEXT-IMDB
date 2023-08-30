"use client";
import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
interface DarkModeSwitchProps {}

export const DarkModeSwitch: FC<DarkModeSwitchProps> = (): JSX.Element => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme("light")} />
        ) : (
          <BsMoonFill onClick={() => setTheme("dark")} />
        ))}
    </>
  );
};
