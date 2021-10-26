/* eslint-disable react/display-name */
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-20"
    >
      <Image
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path}`}
        height={1080}
        width={1920}
        quality="100"
        alt={""}
      />
      <div className="p-2">
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate maw-w-md">{result.overview}</p>
        <div className="flex">
          <p>{result.release_date || result.first_air_date}</p>
          <p className="flex ml-2 items-center opacity-0 group-hover:opacity-100">
            {" "}
            {result.vote_count}
            <ThumbUpIcon className="h-5 mx-2" />
          </p>
        </div>
      </div>
    </div>
  );
});

export default Thumbnail;
