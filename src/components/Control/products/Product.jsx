import { RiFileEditLine } from "react-icons/ri";

export function Product({ id, name, category, code, expiration, stock, cost, discount, price, editMode }) {

    const editModeOn = (product) => {
        console.log(product);
        editMode(product);
    }
    return (
        <ul className="grid grid-cols-8 sm:text-xs md:text-md xl:text-[12px] text-[7px] pl-2 border-b-2 text-gray-400 border-b-slate-600 py-1">
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
            <li className="flex flex-row justify-center">
                <span className="ml-3 sm:mr-2 sm:ml-4">{price}</span>
                <RiFileEditLine className="text-sm 
                    text-yellow-300 
                    sm:text-lg 
                    cursor-pointer 
                    inline-block 
                    rounded 
                    transition 
                    duration-150 
                    ease-in-out 
                    hover:bg-primary-accent-200 
                    focus:bg-primary-accent-200 
                    focus:outline-none 
                    focus:ring-0 
                    active:bg-primary-accent-200 
                    dark:bg-primary-300 
                    dark:hover:bg-primary-400 
                    dark:focus:bg-primary-400 
                    dark:active:bg-primary-400"
                data-twe-toggle="tooltip"
                data-twe-placement="top"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                title="Editar"
                onClick={() => {
                    const product = { id, name, category, code, expiration, stock, cost, discount, price };
                    editModeOn(product);
                }}/>
            </li>
        </ul>
    )
}