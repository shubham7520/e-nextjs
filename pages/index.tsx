import { Inter } from 'next/font/google';
import FirstPage from "./components/home";
import Filter from './components/filter';
import Nav from "./components/navbar/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col ${inter.className}`}
    >
      <Nav />
      <div className='flex justify-center mt-8 mb-10'>
      <Filter />
      <FirstPage />
      </div>
    </main>
  )
}
