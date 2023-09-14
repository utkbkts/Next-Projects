import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { resetcart } from "./store/NextSlice";
const Success = () => {
    const dispatch =useDispatch()
  return (
    <div className="flex flex-col items-center gap-2 justify-center py-20">
      <h1 className="text-2xl text-white font-semibold">Thank You</h1>
      <Link href={"/"} onClick={()=>dispatch(resetcart())}>
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default Success;
