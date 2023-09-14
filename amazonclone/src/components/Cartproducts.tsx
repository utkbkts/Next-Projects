import Image from "next/image";
import React from "react";
import FormatPrice from "./Formatprice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteproduct,
  increaseQuantity,
} from "@/pages/store/NextSlice";
interface p {
  brand: string;
  category: string;
  description: string;
  image: string;
  İsNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  id: number;
  quantity: number;
}
interface cartproductsprops {
  p: p;
}
const Cartproducts = ({ p }: cartproductsprops) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 cartproduct rounded-lg flex items-center gap-4">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={p.image}
        alt="productImage"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <div className="relative">
            <p className="text-lg font-semibold text-blue-500">{p.title}</p>
            <IoMdClose
              className="absolute right-0 top-2 cursor-pointer"
              onClick={() =>
                dispatch(
                  deleteproduct({
                    brand: p.brand,
                    category: p.category,
                    description: p.description,
                    image: p.image,
                    price: p.price,
                    title: p.title,
                    id: p.id,
                    quantity: p.quantity,
                  })
                )
              }
            />
          </div>
          <p className="text-sm text-gray-600">{p.description}</p>
          <p className="font-semibold text-blue-600">
            unit Price{" "}
            <span>
              <FormatPrice amount={p.price} />
            </span>
          </p>
          <div className="flex items-center justify-center gap-6 border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
            <span
              onClick={() =>
                dispatch(
                  increaseQuantity({
                    brand: p.brand,
                    category: p.category,
                    description: p.description,
                    image: p.image,
                    price: p.price,
                    title: p.title,
                    id: p.id,
                    quantity: p.quantity,
                  })
                )
              }
              className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 decoration-purple-300 cursor-pointer"
            >
              <LuPlus />
            </span>
            <span>{p.quantity}</span>
            <span
              onClick={() =>
                dispatch(
                  decreaseQuantity({
                    brand: p.brand,
                    category: p.category,
                    description: p.description,
                    image: p.image,
                    price: p.price,
                    title: p.title,
                    id: p.id,
                    quantity: p.quantity,
                  })
                )
              }
              className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 decoration-purple-300 cursor-pointer"
            >
              <LuMinus />
            </span>
          </div>
        </div>
        <div className="text-lg font-semibold text-blue-500">
          <FormatPrice amount={p.price * p.quantity} />
        </div>
      </div>
    </div>
  );
};

export default Cartproducts;
