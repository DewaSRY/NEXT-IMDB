export const dynamic = "force-dynamic";
import { NextPage } from "next";
import styles from "./page.module.css";
const API_KEY = process.env.API_KEY;
import { Movie } from "@/utils/type";
import ResultItem from "@/Component/Result/Result";
import { urlToHttpOptions } from "url";
interface HomeProps {
  searchParams: {
    genre: string;
  };
}
// const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjIxOWM0Y2QzNTAzZmJmMmZkODdjNzc2ZjBkNDQ3YSIsInN1YiI6IjY0YzBhNWRmNDIwMjI4MDEzZDkxNzExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gjsKrv26-rXFWt_uWG5vjWrVED9BKRuXkh93pbYSJhM",
  },
  next: { revalidate: 10000 },
};

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1 `;
  const res = await fetch(url, options);

  const data: Movie = await res.json();

  const results = data.results;
  return (
    <main className={styles.main}>
      {" "}
      <ResultItem result={results} />
    </main>
  );
};
export default Home;
