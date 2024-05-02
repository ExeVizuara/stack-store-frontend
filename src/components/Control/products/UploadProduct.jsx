import { useState } from "react";
import { addProduct } from "../../shared/ProductService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es');

export function UploadProduct({ currentPage }) {

    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [category, setCategory] = useState(currentPage);
    const [code, setCode] = useState("");
    const [expiration, setExpiration] = useState("");
    const [stock, setStock] = useState(0);
    const [cost, setCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [price, setPrice] = useState(0);

    const add = (event) => {
        event.preventDefault();
        addProduct(name, category, code, expiration, stock, cost, discount, price);
    }

    return (
        <form onSubmit={add}>
            <ul className="grid grid-cols-8 gap-4 px-10 sm:px-10 text-gray-400 xl:mt-16">
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Nombre: </label>
                        <input type="text" 
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" 
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input type="text" 
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            value={currentPage} 
                            readOnly 
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input type="text" 
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={(event) => {
                                setCode(event.target.value);
                            }}
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
                                const formattedDate = date.toISOString().split('T')[0];
                                setExpiration(formattedDate);
                            }} 
                        />
                    </li>
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Stock: </label>
                        <input type="number" 
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={(event) => {
                                setStock(event.target.valueAsNumber);
                            }} 
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input type="number" 
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" 
                            onChange={(event) => {
                                const value = event.target.valueAsNumber ?? 0;
                                setCost(value);
                            }} 
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Descuento: </label>
                        <input type="number" 
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={(event) => {
                                const value = event.target.valueAsNumber ?? 0;
                                setDiscount(value);
                            }} 
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input type="number" 
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={(event) => {
                                setPrice(event.target.valueAsNumber);
                            }} 
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