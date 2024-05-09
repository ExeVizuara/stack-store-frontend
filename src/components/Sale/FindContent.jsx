import { useEffect, useState } from "react";

export function FindContent({ products, addProduct }) {

    useEffect(() => {
        products
    }, []);

    function EvaluateStock(product) {
        console.log("Stock inicial: ", product.stock)
        addProduct(product, product.stock);
    }

    return (
        <div className="absolute flex flex-col items-center justify-center bg-slate-200 rounded-md z-10 text-slate-500 h-auto max-h-[300px]">
                <ul className="overflow-y-auto overflow-x-auto">
                    { products.map((product) => (
                        <li className="hover:bg-slate-300 w-full px-2 sm:px-10 py-1 cursor-pointer text-[9px] sm:text-lg" 
                            key={product.id} 
                            onClick={() => EvaluateStock(product)}>
                            {product.name} ({product.stock}) 
                        </li>
                    ))
                    }
                </ul>
        </div>
    );
};