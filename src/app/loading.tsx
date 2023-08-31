import { NextPage } from "next";
import Image from "next/image";
interface LoadingProps {}

const Loading: NextPage<LoadingProps> = () => {
  return (
    <>
      <Image src="/Loading.svg" alt="loading" width={200} />
    </>
  );
};

export default Loading;
