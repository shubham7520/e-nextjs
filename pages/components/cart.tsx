import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";

const Cart = () => {
  const [like,setLike]=useState(false);
  return (
    <div className="w-64 bg-white rounded-md drop-shadow-lg mb-3">
        <div className="relative">
           {!like? <AiOutlineHeart size={20} className="absolute right-3 top-3 text-slate-500 cursor-pointer" onClick={()=>setLike(!like)}/>:<AiFillHeart color="#454545" size={20} className="absolute right-3 top-3 text-slate-500 cursor-pointer" onClick={()=>setLike(!like)}/>}
            <Image src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="Picture or bag" width={256} height={200} className="rounded-md"/>
        </div>
        <div className="pl-4 pt-4 pb-4">
          <p className="font-semibold mb-1">Bag pack - Travel unlimited w..</p>
          <p className="text-xs font-bold text-slate-600 mb-1">Decoration</p>
          <p className="flex items-center">*****&nbsp; (245)</p>
          <p className="font-medium text-2xl">$13.4 &nbsp;<span className="text-base line-through">$19.5</span> <span className="text-emerald-500 text-base">32% off</span></p>
        </div>
    </div>
  )
}

export default Cart;