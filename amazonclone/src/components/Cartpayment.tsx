"use strict";

import { useState, useEffect } from "react";
import { SiMediamarkt } from "react-icons/si";
import FormatPrice from "./Formatprice";
import { useSelector } from "react-redux";
import { StoreProps, stateprops } from "../../type";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const Cartpayment = () => {
  const { productdata, userInfo } = useSelector(
    (state: stateprops) => state.NextReducer
  );
  const [totalamount, settotalmaount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productdata.forEach((item: StoreProps) => {
      amt += item.price * item.quantity;
    });
    settotalmaount(amt);
  }, [productdata]);

  const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISH_KEY}`);
  const { data: session } = useSession();

  const paymenthandle = async () => {
    const stripe = await stripePromise;
    
    const response = await fetch("/api/Checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ İtems: productdata, email: session?.user?.email }),
    });
    const checkoutSession = await response.json();

    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };

  return (
    <>
      {userInfo ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
              <SiMediamarkt />
            </span>
            <p className="text-sm">Your order qualifies for free shipping</p>
          </div>
          <p className="flex items-center justify-between px-2 font-semibold">
            Total:{" "}
            <span className="font-bold text-xl">
              <FormatPrice amount={totalamount} />
            </span>
          </p>
          <div>
            <button
              onClick={paymenthandle}
              className="w-full h-10 text-sm font-medium bg-blue-600 bg-opacity-50 text-white rounded-lg"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
              <SiMediamarkt />
            </span>
            <p className="text-sm">Your order qualifies for free shipping</p>
          </div>
          <p className="flex items-center justify-between px-2 font-semibold">
            Total:{" "}
            <span className="font-bold text-xl">
              <FormatPrice amount={totalamount} />
            </span>
          </p>
          <div>
            <button className="w-full h-10 text-sm font-medium bg-blue-600 bg-opacity-50 text-white rounded-lg cursor-not-allowed" disabled>
              Proceed to Buy
            </button>
            <p className="text-xs mt-1 text-red-200 font-semibold animate-bounce">
              Please login to continue
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cartpayment;
