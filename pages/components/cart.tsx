import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="w-72 bg-red-600">
        <div>
            <AiOutlineHeart />
            {/* <Image src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?cs=srgb&dl=pexels-athena-2081199.jpg&fm=jpg" alt="Picture or bag" width={72} height={50}/> */}
        </div>
    </div>
  )
}

export default Cart;