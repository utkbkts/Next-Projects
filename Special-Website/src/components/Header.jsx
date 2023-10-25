"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FadeIn } from "../../variants";
import Image from "next/image";
import logo from "../../public/assets/header/logo.svg";
import Navmobile from "./Navmobile";
import Nav from "./Nav";
import Menubtn from "./events/Menubtn";
import Social from "./Social";
const Header = () => {
  const [lastscrollY, setlastscrollY] = useState(0);
  const [show, setshow] = useState("top");
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastscrollY) {
        setshow("hide");
      } else {
        setshow("show");
      }
    } else {
      setshow("top");
    }
    setlastscrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastscrollY]);
  return (
    <div
      className={`fixed z-50 py-6 navbar-position w-full ${show} transition-all`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link
          href={"/"}
          className="relative flex w-[226px] h-[37px] transition-all mb-4 xl:mb-8"
        >
          <Image src={logo} fill />
        </Link>
        <Nav containerstyles={"hidden xl:flex items-center gap-x-8"} />
        <Navmobile />
        <div className="absolute right-7  top-9 xl:hidden z-10">
          <Menubtn />
        </div>

        <div>
          <Social containerstyles={"flex text-[24px] gap-x-4"} iconstyles="hover:text-accent transition-all"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
