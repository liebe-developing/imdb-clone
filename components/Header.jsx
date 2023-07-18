"use client";

import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Items = [
  { title: "Home", path: "/", icon: AiFillHome },
  { title: "About", path: "/about", icon: BsFillInfoCircleFill },
];

const Header = () => {
  return (
    <div className="flexBetween mx-2 max-w-6xl sm:m-auto py-6">
      <div className="flexCenter">
        {Items.map((item, idx) => (
          <MenuItem
            key={idx}
            title={item.title}
            path={item.path}
            Icon={item.icon}
          />
        ))}
      </div>
      <div className="flexCenter space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl space-x-1.5">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
