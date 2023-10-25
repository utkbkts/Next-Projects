import React, { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import Nav from "./Nav";
import { NavContext } from "@/context/NavContext";
const Navmobile = () => {
  const { Open, setOpen } = useContext(NavContext);
  const handleclick = (e) => {
    e.preventDefault();
    setOpen(!Open);

    if (!Open) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };
  return (
    <div>
      <div
        className={`${
          Open ? "right-0" : "right-full"
        } xl:hidden fixed h-screen top-0 z-20 bottom-0 transition-all duration-300 w-full bg-accent`}
      >
        <div
          onClick={handleclick}
          className="absolute right-5 top-5 cursor-pointer"
        >
          <RiCloseLine className="text-2xl" />
        </div>
        <Nav containerstyles={"flex flex-col text-[30px] uppercase font-bold bg-pinl-500/10 h-full items-center justifiy-center gap-y-8"}/>
      </div>
    </div>
  );
};

export default Navmobile;
