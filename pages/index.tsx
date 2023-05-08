import { Inter } from 'next/font/google';
import FirstPage from "./components/home/home";
import Filter from './components/filter/filter';
import Nav from "./components/navbar/navbar";
import { useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);

  return (
    <main
      className={`flex w-screen flex-col ${inter.className}`}
    >
      <Nav setSearch={setSearch} />
      <div className='flex justify-center w-screen' >

        <div className='flex justify-center mt-8 mb-10 gap-5 w-4/5'>
          <div>
            <Filter setBrand={setBrand} setCategory={setCategory} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} /></div>
          <div><FirstPage search={search} brand={brand} category={category} minPrice={minPrice} maxPrice={maxPrice} /></div>
        </div>
      </div>
    </main>
  )
}
