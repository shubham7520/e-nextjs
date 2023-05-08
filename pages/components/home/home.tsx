import Cart from "./cart";
import Data from "../data";

function Home({ search, brand, category, minPrice, maxPrice }: { search: any, brand: any, category: any, minPrice: any, maxPrice: any }) {
    // Include all elements which includes the search query
    let updatedList = Data.filter((item) => {
        return item.item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    if (brand.length) {
        updatedList = updatedList.filter(item => {
            return brand.includes(item.brand)
        });
    }
    if (category.length) {
        updatedList = updatedList.filter(item => {
            return category.includes(item.category)
        });
    }

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
            <div className="flex gap-5" style={{ flexWrap: "wrap" }}>
                {updatedList.map((item, index) => {
                    return <Cart key={index} item={item} />
                })}

            </div>
        </div>
    )
}

export default Home;