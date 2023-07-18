"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Oops! Something went wrong!</h1>
      <button className="text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
