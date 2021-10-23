import requests from "../utils/requests";
import { useRouter } from "next/dist/client/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="scrollbar-hide flex px-10 sm:px-20 text-2xl overflow-y-hidden whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className=" m-2 cursor-pointer last:pr-4 transition-duration-100 transform hover:scale-125 text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
