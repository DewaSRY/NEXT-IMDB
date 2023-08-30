import Image from "next/image";
import { NextPage } from "next";
import styles from "./page.module.css";
const API_KEY = process.env.API_KEY;
// export const dynamic = "force-dynamic";
import { Movie, Result } from "@/utils/type";
import ResultItem from "@/Component/Result/Result";
interface HomeProps {
  searchParams: {
    genre: string;
  };
}

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 * 24 } }
  );

  const data: Movie = await res.json();

  const results = data.results;

  return (
    <main className={styles.main}>
      <ResultItem result={results} />
    </main>
  );
};
export default Home;
