"use client";

import { AiOutlineHeart } from "react-icons/ai";
import { useSession } from "next-auth/react";

const AddFavMovie = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="items-center absolute z-10 left-0 top-0 p-1 backdrop-blur-lg font-semibold rounded-r-none rounded-t-lg text-sm hidden group-hover:flex flex-center cursor-pointer space-x-1">
        <span>Add to favorites</span>
        <AiOutlineHeart className="text-red-600 h-4 w-4" />
      </div>
    );
  }
};

export default AddFavMovie;
