import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import { Clock } from "./Clock";
import { useSearchContext } from "../../services/SearchProvider";

export function TitleSection() {

    const {search, setSearch} = useSearchContext();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleBlur = () => {
        if (search === '') {
            setIsExpanded(false);
        }
    };

    const handleSearch = async (e) => {
        if (e.target.value) {
            setSearch(e.target.value);
            res = await searchName(productList, e.target.value);
            setFilteredProducts(res);
        } else { setSearch("") }
        console.log(res);
    };

    const searchItem = async () => {
        //inputRef.current.focus();
        const productsList = await loadProductsByCategory(currentCategory);
        setSearchProducts(true);
        handlePageChange(currentCategory, productsList);
    }

    return (

        <div className="xl:col-span-8 flex flex-row justify-around bg-gray-900 py-1 mb-4">
            <h1 className="text-2xl text-gray-300">StackStore v1.1</h1>
            <Clock />
            <div className="">
                    <div className="w-full relative">
                        <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer" onClick={searchItem} />
                        <input type="text"
                            placeholder="Producto"
                            value={search ? search : ""}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleSearch}
                            onClick={searchItem}
                            className={`bg-[#1F1D2B] py-2 p-10 pr-4 rounded-lg text-gray-300 outline-none transition-width duration-300 ease-in-out cursor-pointer ${isExpanded ? 'w-40' : 'w-10'}`}
                        />
                    </div>
                </div>
        </div>
    )
}