import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createProducts as createProductMutation } from "../../../graphql/mutations";

export function UploadProduct() {

    const API = generateClient();
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [productPost, setProductPost] = useState({
        name: "",
        category: "",
        code: 0,
        expiration: "",
        stock: 0,
        cost: 0,
        discount: 0,
        price: 0
    })

    const add = async (event) => {

        event.preventDefault();
        const formatDate = `${year}-${month}-${day}`;
        setProductPost({ ...productPost, expiration: formatDate});
        await API.graphql({
            query: createProductMutation,
            variables: { input: productPost },
        });
        console.log(productPost);
    };

    return (
        <form>
            <ul className="grid grid-cols-8 gap-4 px-10 sm:px-10 text-gray-400 xl:mt-16">
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Nombre: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, name: event.target.value });
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, category: event.target.value });
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, code: event.target.value });
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Vencimiento: </label>
                        <div className="flex flex-row justify-around gap-2">
                            <input type="text" placeholder="Dia" className="w-1/3 text-center rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                                setDay(event.target.value);
                            }} />
                            <input type="text" placeholder="Mes" className="w-1/3 text-center rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                                setMonth(event.target.value);
                            }} />
                            <input type="text" placeholder="Año" className="w-1/3 text-center rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                                setYear(event.target.value);
                            }} />
                        </div>
                    </li>
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Stock: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, stock: event.target.value });
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, cost: event.target.value });
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Descuento: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, discount: event.target.value });
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setProductPost({ ...productPost, price: event.target.value });
                        }} />
                    </li>
                </div>
                <div className="col-span-8 text-center">
                    <button onChange={(event) => add}className="hover:bg-[#2c3e19d8] px-6 py-2 border border-[#5c9c19d8] hover:text-white text-[#5c9c19d8] w-full rounded-md">
                        REGISTRAR
                    </button>
                </div>
            </ul >
        </form>
    );
};