import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import { Clock } from "./Clock";
import { useSearchContext } from "../../services/SearchProvider";
import { searchName } from "../../utils/SearchName";

export function TitleSection({ productList, setFilteredProducts}) {

    const {search, setSearch, currentCategory, setSearchProducts} = useSearchContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const [res, setRes] = useState([]);

    const handlePageChange = async (category, prod) => {
        const lowercaseCategory = category.toLowerCase();
        const results = await prod.filter((data) => data.lowercaseCategory === category);
        if (!results) { console.log("NO HAY PRODUCTOS");} 
        else return results;
    }

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
            setRes(await searchName(productList, e.target.value));
            setFilteredProducts(res);
        } else { setSearch("") }
        console.log(res);
    };

    const searchItem = async () => {
        console.log('Buscar  en: ', currentCategory);
        setSearchProducts(true);
        handlePageChange(currentCategory, productList);
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
    );
};