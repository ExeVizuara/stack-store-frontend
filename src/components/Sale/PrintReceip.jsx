import { SellItem } from "./SellItem";
import { useEffect } from "react";
import { Clock, CurrentTime } from "../shared/Clock";

export function PrintReceipt({ products, total, quit, quantity, subTotal }) {

    useEffect(() => {
        products
    }, []);

    return (
        <div className="absolute left-0 top-0 w-full h-full bg-[#0f100f7b] z-10 px-4 lg:px-48 sm:px-20">
            <div className="flex flex-col items-center justify-center bg-white px-6 py-10 rounded-md w-auto relative">
            <button className="absolute right-6 top-1 bg-red-500 border border-red-800 px-1" onClick={quit}>x</button>
                <h6 className="text-slate-600 mb-4"><Clock /></h6>
                <h1 className="text-xl text-slate-600 mb-4 border border-b-8 px-2">TICKET COMPROBANTE</h1>
                <ul className="flex flex-row justify-between text-slate-600 text-md w-full">
                    <li className="">
                        PRODUCTO
                    </li>
                    <li className="">
                        CANTIDAD
                    </li>
                    <li className="">
                        PRECIO
                    </li>
                </ul>
                <div className="overflow-y-auto overflow-x-auto sm:rounded-md text-slate-600 w-full">
                    {products.map((product, index) => (
                        product.category === 'PorKG' ?
                            <SellItem key={index} name={product.name} price={product.price} quantity={quantity[product.id]} total={subTotal[product.id]} category={product.category} />
                            :
                            <SellItem key={index} name={product.name} price={product.price} quantity={quantity[product.id]} total={subTotal[product.id]*quantity[product.id]} category={product.category} />
                        ))
                    }
                </div>
                <div className="flex flex-row gap-10 pt-4">
                    <span className="text-2xl text-slate-600">Total:</span>
                    <span className="text-2xl text-slate-600">${ total }</span>
                </div>
            </div>
        </div>
    );
};