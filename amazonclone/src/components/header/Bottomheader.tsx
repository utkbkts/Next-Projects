import React from "react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react"
import { stateprops } from "../../../type";
import { removeuser } from "@/pages/store/NextSlice";

const Bottomheader = () => {
  const { data: session, status } = useSession()
  const dispatch =useDispatch()

  const { productdata, favoritedata,userInfo } = useSelector(
    (state: stateprops) => state.NextReducer
  );
  const handlesignout=()=>{
    signOut()
    dispatch(removeuser())
  }
  return (
    <div className="w-full h-10 bg-gray-600 text-sm text-white px-4 flex items-center gap-5">
      <p className="flex items-center gap-1 h-10 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu  className="text-xl"/>
        All
      </p>
      <p className="hidden md:inline-flex  items-center h-10 border border-transparent hover:border-white cursor-pointer duration-300">Todays Deals</p>
      <p className="hidden md:inline-flex  items-center h-10 border border-transparent hover:border-white cursor-pointer duration-300">Customer Service</p>
      <p className="hidden md:inline-flex  items-center h-10 border border-transparent hover:border-white cursor-pointer duration-300">Registry</p>
      <p className="hidden md:inline-flex  items-center h-10 border border-transparent hover:border-white cursor-pointer duration-300">Gift Cards</p>
      <p className="hidden md:inline-flex  items-center h-10 border border-transparent hover:border-white cursor-pointer duration-300">Sell</p>
    {userInfo &&   <p onClick={handlesignout} className="hidden md:inline-flex  items-center h-10 border border-transparent hover:border-red-600 text-yellow-300 cursor-pointer duration-300">Sign Out</p>}
    </div>
  );
};

export default Bottomheader;
