"use client"; // Error components must be Client Components
import style from "./error.module.scss";
import { useEffect } from "react";

import { NextPage } from "next";

interface errorProps {
  error: Error;
  reset: () => void;
}

const Error: NextPage<errorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className={style.error}>
      <div>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
};

export default Error;
