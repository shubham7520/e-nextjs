import Cart from "./cart";

function Home(){
    return (
        <div className="">
            <div className="flex justify-between items-center mb-4">
                <div className="flex">
                    <p>Home</p>
                    <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                    <p>Home decoration</p>
                    <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                    <p>Artifical</p>
                </div>
                <div>
                    <select className="w-28 bg-slate-100 rounded outline-none border-solid border-1 border-slaty-900 px-1 py-1">
                        <option>Sort by</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-5" style={{flexWrap: "wrap"}}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            </div>
        </div>
    )
}

export default Home;