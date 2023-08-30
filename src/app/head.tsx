import { NextPage } from "next";
import Head from "next/head";
interface headProps {}

const head: NextPage<headProps> = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
    </>
  );
};

export default head;
