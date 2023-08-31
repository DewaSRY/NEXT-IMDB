import { NextPage } from "next";
import Image from "next/image";
interface LoadingProps {}

const Loading: NextPage<LoadingProps> = () => {
  return (
    <div
      style={{
        widows: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/Loading.svg" alt="loading" width={200} height={200} />
    </div>
  );
};

export default Loading;
