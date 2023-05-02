import { BsBellFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const navbar = () => {
  return (
    <div className="flex bg-white drop-shadow-lg w-full h-16 items-center justify-center gap-52">
        <div className= "flex justify-center gap-20">
            <p>W2N</p>
            <input  placeholder="search Name" className="rounded-3xl h-8 pl-2 border-black"/>
        </div>
        <div className= "flex items-center gap-5">
           <p className="flex items-center gap-2"><GiHamburgerMenu size={25} /> Categories</p>
            <BsBellFill size={20} />
            <CgProfile  size={30}/>
        </div>
    </div>
  )
}

export default navbar