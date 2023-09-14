"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormatPrice from "./Formatprice";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, addTocart, isloading } from "@/pages/store/NextSlice";
import { ProductProps } from "../../type";
const Products = ({ data }: any) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Her sayfada gösterilecek resim sayısı

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center">
      {currentItems.map((item: ProductProps) => (
        <div
          key={item.id}
          className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
        >
          <div className="w-full h-[260px] relative">
            <Image
              className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform"
              src={item.image}
              width={200}
              height={200}
              alt="image"
            />
            <div className="w-12 h-24 absolute bottom-14 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform">
              <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-yellow-400 cursor-pointer duration-300">
                <HiShoppingCart />
              </span>
              <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-yellow-400 cursor-pointer duration-300">
                <FaHeart  onClick={() => {
                dispatch(
                  addToFavorite({
                    id: item.id,
                    category: item.category,
                    description: item.description,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                  })
                );
              }}/>
              </span>
            </div>
            <p className="absolute top-0 right-00 text-blue-500 font-medium text-xs tracking-wide animate-bounce">
              <FormatPrice amount={item.price} />
            </p>
          </div>
          <hr />
          <div className="px-4 py-3 flex flex-col gap-1">
            <p className="text-xs text-gray-500 tracking-wide">
              {item.category}
            </p>
            <p className="text-base font-medium">{item.title}</p>
            <p>
              <span>
                <FormatPrice amount={item.price} />
              </span>
            </p>
            <p>{`${item.description.substring(0, 50)}...`}</p>
            <button
              onClick={() => {
                dispatch(
                  addTocart({
                    id: item.id,
                    category: item.category,
                    description: item.description,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                  })
                );
              }}
              className="h-10 font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700 shadow-xl duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      <div className="col-span-full flex justify-center space-x-2 mb-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } px-3 py-1 rounded-md cursor-pointer`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
