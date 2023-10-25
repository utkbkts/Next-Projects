import { Alex_Brush, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavContextProvider from "@/context/NavContext";

const Alex = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alex",
});
const Montser = Montserrat({
  weight: ["400", "100", "200", "300", "500"],
  subsets: ["latin"],
  variable: "--font-montser",
});

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
      <html lang="en">
        <body
          className={`${Alex.variable} ${Montser.variable} overflow-x-hidden relative`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NavContextProvider>
  );
}
