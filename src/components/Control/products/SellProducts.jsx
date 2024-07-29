export function SellProducts({ 
        name, 
        category, 
        code, 
        expiration, 
        discount, 
        price,
        subTotal, 
        quantity, 
        removeProduct, 
        addQuantity, 
        subtractQuantity 
    }) 
    {

    return (
        <ul className="relative text-center grid grid-cols-5 sm:text-xs md:text-md 2xl:text-lg text-[8px] p-2 border-b-2 text-gray-400 border-b-slate-600 py-1">
            <li>
                {name}
            </li>
            <li className="flex flex-row justify-around">
                <button className="border px-1 bg-[#262837]" onClick={subtractQuantity}>-</button>
                    {quantity}
                <button className="border px-1 bg-[#262837]" onClick={addQuantity}>+</button>
            </li>
            <li>
                {price}
            </li>
            <li>
                {discount}
            </li>
            <li>
                {subTotal}
            </li>
            <button className="absolute right-4 top-1 bg-red-500 border px-1" onClick={removeProduct}>x</button>
        </ul>
    )
}