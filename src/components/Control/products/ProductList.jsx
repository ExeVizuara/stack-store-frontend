import { Product } from "./Product";

export function ProductList({ productList }) {

    return (
        <div className="data bg-[#262837] flex flex-col pb-4 lg:p-4 gap-2 lg:gap-4 md:pb-18 rounded-lg max-h-[500px]">
            <ul className="grid grid-cols-8 md:text-sm text-[8px] border-b-2 border-b-slate-400 pb-2 px-1">
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
                    VENCE
                </li>
                <li>
                    STOCK
                </li>
                <li>
                    COSTO
                </li>
                <li>
                    DESC
                </li>
                <li>
                    PRECIO
                </li>
            </ul>
            <div className="overflow-y-auto overflow-x-auto sm:rounded-md bg-gray-700">
                {productList.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <h3 className="flex flex-row justify-end">Total = {productList.length} productos</h3>
        </div>
    )
};