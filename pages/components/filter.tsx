import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="w-1/6 bg-white drop-shadow-lg">
        <div className="flex justify-between items-center px-5 h-10">
            <p>Filter</p>
             <FaFilter />
        </div>
        <hr className="" />
        <div className="pl-5 py-3">
            <p className="mb-1 font-semibold">Brand</p>
            <p><input type="checkbox"/> &nbsp;Number A</p>
            <p><input type="checkbox"/> &nbsp;Brand 2</p>
            <p><input type="checkbox"/> &nbsp;Brand C</p>
            <p><input type="checkbox"/> &nbsp;Miracle</p>
            <p><input type="checkbox"/> &nbsp;Empty</p>
        </div>
        <hr className="" />
        <div className="pl-5 py-3">
            <p className="mb-1 font-semibold">Category</p>
            <p><input type="checkbox"/> &nbsp;Number A</p>
            <p><input type="checkbox"/> &nbsp;Brand 2</p>
            <p><input type="checkbox"/> &nbsp;Brand C</p>
            <p><input type="checkbox"/> &nbsp;Miracle</p>
            <p><input type="checkbox"/> &nbsp;Empty</p>
        </div>
        <hr className="text-black" />
        <div className="pl-5 py-3">
            <p className="mb-1 font-semibold">Price</p>
            <p><input type="checkbox"/> &nbsp;{"< $100"}</p>
            <p><input type="checkbox"/> &nbsp;{"$100-$199"}</p>
            <p><input type="checkbox"/> &nbsp;{"$200-$599"}</p>
            <p><input type="checkbox"/> &nbsp;{"$600-$999"}</p>
            <p><input type="checkbox"/> &nbsp;{"> $1000"}</p>
        </div>
    </div>
  )
}

export default Filter