import moment from "moment/moment";
import Link from "next/link";
import React from "react";
import "moment/locale/tr"
import {
  BsFillCalendarCheckFill,
  BsFillCalendar2EventFill,
} from "react-icons/bs";

async function getbolumler() {
  await new Promise(resolve=>setTimeout(resolve,200))
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  return res.json();
}

const Bolumler = async () => {
  const bolumler = await getbolumler();
//   const date = new Date();
  // const formattarih= date.getDay()+""+(date.getMonth + 1)+""+date.getFullYear()
  return (
    <div className="container-bolum">
      <h2 className="baslik-bolum">Bölümler</h2>
      <ul className="bolum-ul">
        {bolumler.results.map((bolum) => (
          <li key={bolum.id}>
            <Link href={`/bolumler/${bolum.id}`}>
              <h3>{bolum.name}</h3>
              <p>{bolum.episode}</p>
              <div className="episode-details">
                {/* <span>{new Date(bolum.air_date).toLocaleDateString()}</span> */}
                <span>
                  <BsFillCalendarCheckFill />
                  {moment(bolum.air_date).format("LL")}
                </span>
                <span>
                  <BsFillCalendar2EventFill />
                  {moment(bolum.created).format("LL")}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bolumler;
