import Link from "next/link";
import {useEffect} from "react";
import { BiCaretDown, BiCartAdd } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { stateprops } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react"
import { addUser } from "@/pages/store/NextSlice";

const Header = () => {
  const { data: session, status } = useSession()
  const dispatch =useDispatch()
  const { productdata, favoritedata,userInfo } = useSelector(
    (state: stateprops) => state.NextReducer
  );

    useEffect(()=>{
      if(session){
        dispatch(addUser({
          name:session?.user?.name,
          email:session?.user?.email,
          image:session?.user?.image,
        }))
      }
      
    },[])

  return (
    <div className="w-full h-20 bg-gray-700 sticky top-0 text-gray-300 z-50 flex items-center">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 md:gap-3 px-4 flex-1">
        <h1 className="text-2xl cursor-pointer hover:text-gray-200 transition-all duration-300">
          LOGO
        </h1>
      </div>
      <div className="w-full flex-3 flex items-center">
        <div className="flex items-center justify-between px-2 border border-transparent hover:border-white cursor-pointer duration-300 xl:inline-flex gap-1 ">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold">USA</p>
          </div>
        </div>
        <div className=" flex-1 w-full h-10 overflow-hidden md:inline-flex items-center justify-between relative flex">
          <input
            type="text"
            className="w-full p-1 rounded-md h-full outline-none text-black"
            name=""
            id=""
            placeholder="Search Products"
          />
          <span className="w-12 h-full bg-yellow-500 text-black text-2xl flex items-center justify-center rounded-md absolute right-0">
            <HiOutlineSearch />
          </span>
        </div>
      </div>
    {userInfo ? (  <div onClick={()=>signIn()} className="text-xs flex-[150px] text-gray-200 flex flex-col justify-center px-2 items-center border border-transparent cursor-pointer duration-300 h-[70%] w-full">
       <img width={50} height={50} src={userInfo.image} alt="" />
       <div className="text-xs text-gray-400 flex flex-col justify-between">
        <p className="text-white font-bold">{userInfo.name}</p>
        <p>{userInfo.email}</p>
       </div>
      </div>):(  <div onClick={()=>signIn()} className="text-xs flex-[150px] text-gray-200 flex flex-col justify-center px-2 items-center border border-transparent cursor-pointer duration-300 h-[70%] w-full">
        <p>Hello,Sign in</p>
        <p className="text-white font-bold">Account & Lists </p>
        <span>
          <BiCaretDown />
        </span>
      </div>)}
      <div className="text-xs flex-[150px] text-gray-200 flex flex-col justify-center items-center px-2 border border-transparent cursor-pointer duration-300 h-[70%] w-full relative">
        <p>Marked</p>
        <p className="text-white font-bold">& Favorite</p>
        {favoritedata.length > 0 &&(<p className="absolute left-12 -bottom-2 w-4 h-4 border-[1px] border-gray-800 flex items-center justify-center text-xs text-yellow-400">{favoritedata.length}</p>)}
      </div>
      <div className="flex flex-col text-xl items-center justify-center relative">
        <Link href="/cart">
          <p>Cart</p>
        </Link>
        <BiCartAdd />
        <span className="absolute text-gray-50 text-xs top-2  top-[45px] right-[13px]">
          {productdata.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
