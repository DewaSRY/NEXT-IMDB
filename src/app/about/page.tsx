import style from "./About.module.scss";
import { NextPage } from "next";

interface pageProps {}

const page: NextPage<pageProps> = () => {
  return (
    <div className={style.About}>
      <h1>hallo</h1>
    </div>
  );
};

export default page;
