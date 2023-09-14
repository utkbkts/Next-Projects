import Navbar from "@/app/header/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"],weight:["200","400"] });

export const metadata = {
  title: "Ricky And Morty App",
  description: "Uygulama Gelistirme",
  keywords:"next,udemy,react"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
