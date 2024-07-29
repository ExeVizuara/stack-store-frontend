export function Product({ name, category, code, expiration, stock, cost, discount, price }) {

    return (
        <ul className="grid grid-cols-8 sm:text-xs md:text-md 2xl:text-[12px] text-[7px] pl-2 border-b-2 text-gray-400 border-b-slate-600 py-1">
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
                {stock}
            </li>
            <li>
                {cost}
            </li>
            <li>
                {discount}
            </li>
            <li>
                {price}
            </li>
        </ul>
    )
}