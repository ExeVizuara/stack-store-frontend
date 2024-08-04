import { RiSearch2Line } from "react-icons/ri";
import { Clock } from "./Clock";
import { useState, useRef } from "react";
import { ProductList } from "../Control/products/ProductList";

export function TitleSection() {

    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
  
    const handleFocus = () => {
      setIsExpanded(true);
    };
  
    const handleBlur = () => {
      if (inputValue === '') {
        setIsExpanded(false);
      }
    };
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-row justify-between md:items-center gap-4 px-4">

            <div className="flex flex-col sm:flex-row w-1/2 justify-between">
                <h1 className="text-2xl text-gray-300">StackStore v1.1</h1>
                <Clock />
            </div>
            <form>
                <div className="w-full relative" onClick={() => inputRef.current.focus()}>
                    <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="text"
                        placeholder="Producto"
                        value={inputValue}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={`bg-[#1F1D2B] py-2 p-10 pr-4 rounded-lg text-gray-300 outline-none transition-width duration-300 ease-in-out ${isExpanded ? 'w-40' : 'w-10'}`}
                    />
                </div>
            </form>
        </div>
    )
}