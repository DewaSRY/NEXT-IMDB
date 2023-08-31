export const dynamic = "force-dynamic";
import { NextPage } from "next";
import styles from "./page.module.css";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
import { Movie } from "@/utils/type";
import ResultItem from "@/Component/Result/Result";
interface HomeProps {
  searchParams: {
    genre: string;
  };
}
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + ` ${ACCESS_TOKEN}`,
  },
};

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  // const url = `https://api.themoviedb.org/3/${
  //   genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  // }?api_key=${API_KEY}&language=en-US&page=1 `;
  const res = await fetch(url, options);

  const data: Movie = await res.json();

  const results = data.results;
  console.log(results);
  return (
    <main className={styles.main}>
      {" "}
      <ResultItem result={results} />
    </main>
  );
};
export default Home;
