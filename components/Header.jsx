"use client";

import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Items = [
  { title: "Home", path: "/", icon: AiFillHome },
  { title: "About", path: "/about", icon: BsFillInfoCircleFill },
];

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const { data: session } = useSession();
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
        <div className="relative">
          {session ? (
            <>
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full cursor-pointer"
                alt="profile"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              ></Image>

              {toggleDropdown && (
                <div className="dropdown">
                  <span className="text-sm text-gray-500 truncate">
                    {session?.user?.email}
                  </span>
                  <Link
                    href="/dashboard"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              href="/signin"
              className="text-amber-600 font-semibold hover:text-amber-500"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
