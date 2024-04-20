import { useState, useEffect } from "react";
import { Product } from "./Product";
import { generateClient  } from "aws-amplify/api";
import { listProducts } from "../../../graphql/queries";

export function ProductList({ view }) {

    const [productList, setProductList] = useState([]);

    const API = generateClient();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const apiData = await API.graphql({ query: listProducts, variables: { category: 'Almacen' } });
        const productsFromAPI = apiData.data.listProducts.items;
        setProductList(productsFromAPI);
    }

    return (
        <div className="data bg-[#262837] flex flex-col pb-4 lg:p-8 gap-2 lg:gap-4 md:pb-18 rounded-lg max-h-[500px]">
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
                    VENCIMIENTO
                </li>
                <li>
                    STOCK
                </li>
                <li>
                    COSTO
                </li>
                <li>
                    DESCUENTO
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
        </div>
    )
};