export function SellProducts({ name, category, code, expiration, discount, price, removeProduct }) {

    return (
        <ul className="relative text-center grid grid-cols-6 sm:text-xs md:text-md 2xl:text-lg text-[7px] p-2 border-b-2 text-gray-400 border-b-slate-600 py-1">
            <li>
                {name}
            </li>
            <li>
                {category}
            </li>
            <li>
                {code}
            </li>
            <li>
                {expiration}
            </li>
            <li>
                {discount}
            </li>
            <li>
                {price}
            </li>
            <button className="absolute right-6 top-1 bg-red-500 border border-red-800 px-1" onClick={removeProduct}>x</button>
        </ul>
    )
}