import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Inter } from "next/font/google";
import { ProductProps } from "../../type";

const font = Inter({ subsets: ["latin"] });

interface Props {
  data: ProductProps[];
}

export default function Home({ data }: Props) {
  
  return (
    <main className={font.className}>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
       <div className="h-full relative md:mt-20 lg:mt-32 xl:mt-60 z-20">
       <Products data={data} />
       </div>
      </div>
    </main>
  );
}

// DATA FETCH

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { data } };
};
