"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

// async function getKarakterler() {
//     const res = await fetch("http://localhost:3000/api/karakterler")
//     return res.json()
// }

const Page = async () => {
  // const karakterler = await getKarakterler()
  const [loading, setloading] = useState(true);
  const [sayfa, setsayfa] = useState(1);
  const [toplamsayfa, settoplamsayfa] = useState("");
  const [karakterler, setkarakterler] = useState([]);
  useEffect(() => {
    setloading(true);
    const getkarakterler = async (page) => {
      const res = await fetch(
        "http://localhost:3000/api/karakterler?page=" + page
      );
      const data = await res.json();
      console.log(data);
      setkarakterler(data);
      setloading(false);
    };
    getkarakterler(sayfa);
  }, [sayfa]);
  if (loading) {
    return <Loading />;
  }
  const handleileri = (e) => {
    e.preventDefault();
    setsayfa(sayfa + 1);
  };
  const handlegeri = (e) => {
    e.preventDefault();
    setsayfa(sayfa - 1);
  };
  const totalPages = karakterler.info.pages;

  const pageNumbers = [];
  const maxsayfa = 5;
  for (
    let i = Math.max(1, sayfa - Math.floor(maxsayfa / 2));
    i <= Math.min(totalPages, sayfa + Math.floor(maxsayfa / 2));
    i++
  ) {
    pageNumbers.push(i);
  }
  const handleSayfaDegistir = (pageNumber) => {
    setsayfa(pageNumber);
  };
  return (
    <div className="karakterler">
      <h2 style={{ color: "white" }}>
        Ricky And Morty Şu an ~ {sayfa}.sayfadasınız.Toplam{" "}
        {karakterler.info.count} sayfa var
      </h2>
      {karakterler.results.map((k) => (
        <div className="card" key={k.id}>
          <h2>Name:{k.name}</h2>
          <div>
            <Image
              alt={`Resim: ${k.name}`}
              src={k.image}
              width={100}
              height={100}
            />
          </div>
          <div className="card-start">
            <div>
              <p>Status: {k.status}</p>
              <p>Species: {k.species}</p>
              <p>Gender: {k.gender}</p>
            </div>
            <div>
              <b>Location:</b>
              <p>Name: {k.location.name}</p>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {karakterler.info.prev && (
          <button onClick={handlegeri} className="btn">
            Geri
          </button>
        )}
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleSayfaDegistir(pageNumber)}
            className="btn"
          >
            {pageNumber}
          </button>
        ))}
        {karakterler.info.next && (
          <button onClick={handleileri} className="btn">
            İleri
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
