import { useState, useEffect } from "react";
import { addProduct } from "../../../services/ProductService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es');

export function UploadProduct({ productList, loadProducts, currentPage }) {

    const [newProduct, setNewProduct] = useState({});
    const [expiration, setExpiration] = useState("");
    const initialProductState = {
        name: "",
        category: currentPage,
        code: "",
        expiration: "",
        stock: "",
        cost: "",
        discount: "",
        price: ""
    };

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    }

    const add = async (event) => {
        event.preventDefault();
        await addProduct({
            ...newProduct,
            category: currentPage,
        });
        setNewProduct({ ...initialProductState });
        loadProducts();
    }

    return (
        <form onSubmit={add}>
            <ul className="grid grid-cols-8 gap-4 px-10 sm:px-10 text-gray-400 bg-gray-700 py-5">
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name || ""}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input
                            type="text"
                            name="category"
                            value={currentPage}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            readOnly
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input
                            type="text"
                            name="code"
                            value={newProduct.code || ""}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Vencimiento: </label>
                        <DatePicker
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            selected={expiration}
                            showIcon
                            isClearable
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => {
                                if (!date) { setExpiration("") }
                                else {
                                    const formattedDate = date.toISOString().split('T')[0];
                                    setExpiration(formattedDate);
                                }
                            }}
                        />
                    </li>
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Stock: </label>
                        <input
                            type="text"
                            name="stock"
                            value={newProduct.stock || ""}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input
                            type="text"
                            name="cost"
                            value={newProduct.cost || ""}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio x bulto: </label>
                        <input
                            type="text"
                            name="discount"
                            value={newProduct.discount || ""}
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input
                            type="text"
                            name="price"
                            value={newProduct.price || ""}
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                </div>
                <div className="col-span-8 text-center">
                    <button type="submit"
                        className="hover:bg-[#2c3e19d8] px-6 py-2 border border-[#5c9c19d8] hover:text-white text-[#5c9c19d8] w-full rounded-md">
                        REGISTRAR
                    </button>
                </div>
            </ul >
        </form>
    );
};