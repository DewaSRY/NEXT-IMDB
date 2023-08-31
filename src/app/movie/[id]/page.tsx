import { NextPage } from "next";
import style from "./Movie.module.scss";
async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}
interface pageProps {
  params: {
    id: string;
  };
}

const MoviePage: NextPage<pageProps> = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  let src = `https://image.tmdb.org/t/p/original${
    movie.backdrop_path || movie.poster_path
  }`;
  return (
    <div className={style.Movie}>
      <div>
        <img src={src} alt="test" />
        <h2>{movie.title || movie.name}</h2>
        <p>
          <span>Overview:</span>
          {movie.overview}
        </p>

        <div>
          <p>
            <span>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
