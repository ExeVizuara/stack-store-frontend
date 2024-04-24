import { useEffect, useState } from "react";

export function FindContent({ products, addProduct, stock }) {

    const [showList, setShowList] = useState(true);

    useEffect(()=>{
        showList
    },[showList]);

    useEffect(() => {
        products
    }, []);

    function EvaluateStock(product) {
        console.log(product.stock)
        stock = product.stock;
        if (product && product.stock === 0) {
            alert("No hay stock disponible de ese producto!");
        } else {
            setShowList(false);
            addProduct(product);
        }
    }

    return (
        <div className="absolute flex flex-col items-center justify-center bg-slate-200 rounded-md z-10 text-slate-500">
            {showList && (
                <ul>
                    { products.map((product) => (
                        <li className="hover:bg-slate-300 w-full px-10 py-1 cursor-pointer" 
                            key={product.id} 
                            onClick={() => EvaluateStock(product.stock)}>
                            {product.name}
                        </li>
                    ))
                    }
                </ul>
            )}
        </div>
    );
};