import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const MovieCard = ({ result }) => {
  const {
    id,
    backdrop_path,
    poster_path,
    original_title,
    overview,
    title,
    name,
    release_date,
    first_air_date,
    vote_count,
  } = result;

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            // height: "auto",
          }}
          alt={original_title}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>

        <div className="p-2">
          <p className="line-clamp-2 text-md">{overview}</p>
          <h2 className="truncate text-lg font-bold">{title || name}</h2>
          <p className="flex items-center">
            {release_date || first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
