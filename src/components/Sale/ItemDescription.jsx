import { SellProducts } from "../Control/products/SellProducts";
import { useEffect } from "react";

export function ItemDescription ({ products, removeProduct, total, cancelOperation, chargeProducts }) {

    useEffect(() => {
        products
    }, []);

    return (
        <div className="data bg-[#262837] flex flex-col sm:p-2 pb-4 lg:p-8 rounded-lg min-h-[350px] sm:min-h-[600px]">
            <ul className="text-center grid grid-cols-6 sm:text-[13px] 2xl:text-lg text-[8.5px] border border-gray-600 p-1 sm:px-6 rounded-t-xl">
                <li>
                    NOMBRE
                </li>
                <li>
                    CATEGORIA
                </li>
                <li>
                    CODIGO
                </li>
                <li>
                    VENCIMIENTO
                </li>
                <li>
                    DESCUENTO
                </li>
                <li>
                    PRECIO
                </li>
            </ul>
            <div className="col-span-6 overflow-y-auto overflow-x-auto bg-gray-700 sm:p-4 min-h-[320px] sm:min-h-[445px] border border-gray-600">
                { products.map((product, index) => (
                    <SellProducts key={ index } { ...product } removeProduct={() => removeProduct(index, product.price, product.id)}/>
                ))}
            </div>
            <div className="border border-gray-600 sm:rounded-bl-xl bg-gray-700 p-2 px-10 sm:px-14 text-sm sm:text-2xl flex flex-row justify-between">
                <h1 className="self-center">TOTAL A PAGAR:</h1>
                <span className="border border-gray-600 bg-[#d8dccbd8] text-[#46493fd8] rounded-md p-3 px-10 sm:px-12">${total}</span>
            </div>
            <div className="sm:flex sm:flex-row sm:justify-end">
                <button className="text-md border border-[#ca3232d8] text-[#d8dccbd8] bg-[#46493fd8] hover:bg-[#bd4444ec] hover:text-[#d8dccbd8] rounded-b-md p-1 px-10 sm:px-8 w-full sm:w-auto" onClick={ cancelOperation }>BORRAR</button>
                <button className="text-md border border-[#5c9c19d8] text-[#d8dccbd8] bg-[#46493fd8] hover:bg-[#5c9c19d8] hover:text-[#d8dccbd8] rounded-b-md p-1 px-10 sm:px-8 w-full sm:w-auto" onClick={ chargeProducts }>COBRAR</button>
            </div>
        </div>
    )
}