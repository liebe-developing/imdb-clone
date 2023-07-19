import Image from "next/image";

async function getMovie(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.EMDB_API_KEY}&language=en-US`
  );
  return await response.json();
}

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  const {
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
    backdrop_path,
    poster_path,
    original_title,
  } = movie;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center justify-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          alt={original_title}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{title || name}</h2>
          <p className="text-lg mb-3 text-justify">
            <span className="font-semibold mr-1">Overview:</span>
            {overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {release_date || first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
