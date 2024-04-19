import { useState } from "react";
import { Product } from "./Product";
import Axios from "axios";

export function ProductList () {

    const [productList, setProductList] = useState([]);

    const getProducts = () => {
        Axios.get(`${BackendURL}/products`)
            .then((data) => {
                setProductList(data);
            })
            .catch((err) => {
                if (err) {
                    setErrorMessage("Error al cargar lista de productos" + err.data);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log('Error', err.message);
                }
            });
    };

    getProducts();

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
                { productList.map((product) => (
                    <Product key={ product.id } { ...product } />
                ))}
            </div>
        </div>
    )
};