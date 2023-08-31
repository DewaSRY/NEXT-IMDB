"use client";
import Image from "next/image";
import style from "./Card.module.scss";
// import { FC } from "react";
import { NextPage } from "next";
import { Result } from "@/utils/type";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
interface CardProps {
  result: Result;
}

const Card: NextPage<CardProps> = ({ result }): JSX.Element => {
  let src = `https://image.tmdb.org/t/p/original${
    result.backdrop_path || result.poster_path
  }`;
  // let src =
  //   "https://image.tmdb.org/t/p/original//rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg";

  return (
    <>
      <div className={style.Card}>
        <Link href={`/movie/${result.id}`}>
          <img src={src} alt="test" />
          {/* <Image
            src={`https://image.tmdb.org/t/p/original${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            placeholder="blur"
            blurDataURL="/Loading.svg"
            alt="image is not available"
          /> */}
          <div>
            <p>{result.overview}</p>
            <h2 className="truncate text-lg font-bold">
              {result.title || result.original_title || result.name}
            </h2>
            <p>
              {result.release_date || result.first_air_date}
              <FiThumbsUp /> {result.vote_count}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Card;
