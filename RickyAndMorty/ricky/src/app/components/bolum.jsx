"use client"
import moment from "moment/moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "moment/locale/tr"
import {
  BsFillCalendarCheckFill,
  BsFillCalendar2EventFill,
} from "react-icons/bs";
import Loading from "../loading";

async function getbolum(id) {
    await new Promise(resolve=>setTimeout(resolve,300))
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    if (!response.ok) {
      throw new Error("HTTP hata: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Veri alımı sırasında hata oluştu:", error);
    throw error;
  }
}

const Bolum = ({ id }) => {
  const [bolum, setBolum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getbolum(id);
        setBolum(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="bolum-card">
      {isLoading ? (<><Loading/></>):(bolum &&  (
        <div>
          <h2>Bölüm Adı:{bolum.name}</h2>
          <div>
            <h3>Bölüm:{bolum.episode}</h3>
          </div>
          <div className="episode-details">
            <span><BsFillCalendarCheckFill/>{moment(bolum.air_date).format("LL")}</span>
            <span><BsFillCalendar2EventFill/>{moment(bolum.created).format("LL")}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bolum;
