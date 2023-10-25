import React from "react";
import { Link } from "react-scroll";
import {useMediaQuery} from "react-responsive"
const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discograhpy",
    name: "Discograhpy",
  },
  {
    path: "contact",
    name: "Contact",
  },
];
const Nav = ({ containerstyles, linkstyles }) => {
  const isDescktop = useMediaQuery({
    query:"(min-width:1310px)"
  })
  return (
    <nav className={`${containerstyles}`}>
      {links.map((link,index) => {
        return (
          <Link
            className={`${linkstyles} cursor-pointer border-b-2 border-transparent`}
            key={index}
            smooth={!isDescktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
            to={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
