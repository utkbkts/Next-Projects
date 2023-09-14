import React from "react";
import { useSelector } from "react-redux";
import { StoreProps, stateprops } from "../../type";
import Cartproducts from "@/components/Cartproducts";
import Resetcart from "@/components/Resetcart";
import Link from "next/link";
import Cartpayment from "@/components/Cartpayment";

const Cart = () => {
  const { productdata } = useSelector((state: stateprops) => state.NextReducer);
  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productdata.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-2 border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-yellow-300">Shopping Cart</p>
            <p className="text-lg font-semibold text-yellow-400">Subtitle</p>
            </div>
            <div className="flex pt-2 flex-col gap-2 ">
              {productdata.map((p:StoreProps)=>(
                <div key={p.id} >
                  <Cartproducts p={p}/>
                </div>
              ))}
              <Resetcart/>
            </div>
          </div>
          <div className="bg-white h-64 col-span-1 p-4 rounded-lg items-center justify-center">
            <Cartpayment/>
          </div>
        </>
      ) : (
        <div className="bg-white flex items-center justify-center flex-col height py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Your Cart is Empyt !</h1>
          <Link href="/"><button className="w-52 p-1 h-120 bg-blue-500 text-white rounded-lg text-sm font-semibold">Go To Shopping</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
