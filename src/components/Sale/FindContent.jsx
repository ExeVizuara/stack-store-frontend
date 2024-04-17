import { useEffect } from "react";

export function FindContent({ products, addProduct }) {

    useEffect(() => {
        products
    }, []);

    return (
        <div className="absolute flex flex-col items-center justify-center bg-slate-200 rounded-md z-10 text-slate-500">
            <ul>
                { products.map((product) => (
                    <li className="hover:bg-slate-300 w-full px-10 py-1 cursor-pointer" key={product.id} onClick={() => addProduct(product)}>{product.name}</li>
                ))
                }
            </ul>
        </div>
    );
};