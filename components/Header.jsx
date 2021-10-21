import React from "react";
import Image from "next/dist/client/image";
import hulu from "../public/hulu.png";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LighteningBoldIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="/hulu.png"
        alt="hulu"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
