import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createProducts as createProductMutation } from "../../../graphql/mutations";

export function UploadProduct() {

    const API = generateClient();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [code, setCode] = useState(0);
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [expiration, setExpiration] = useState("");
    const [stock, setStock] = useState(0);
    const [cost, setCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [price, setPrice] = useState(0);

    const add = async (event) => {
        event.preventDefault();
        setExpiration(`${year}-${month}-${day}`);
        const data = {
            name: name,
            category: category,
            code: code,
            expiration: expiration,
            stock: stock,
            cost: cost,
            discount: discount,
            price: price
        };
        console.log(data);
        try {
            const result = await API.graphql({
                query: createProductMutation,
                variables: {
                    input: data
                }
            });
            // Verificar si hay errores en la respuesta GraphQL
            if (result.errors) {
                // Mostrar los errores en la consola
                console.error("Errores de GraphQL:", result.errors);
                // Mostrar los errores en la interfaz de usuario
                // Por ejemplo, podrías mostrar los errores en un componente de alerta o en un mensaje de error dentro del formulario
                // Aquí un ejemplo básico de cómo podrías mostrarlos en un alert
                alert("Ocurrieron errores al procesar la solicitud. Por favor, revisa los datos ingresados.");
            } else {
                // Si no hay errores, el producto se registró correctamente
                alert("Producto registrado exitosamente.");
                // Limpiar el formulario u otra acción necesaria después del registro exitoso
                // Por ejemplo, podrías resetear los estados de los inputs del formulario
                
                // Limpiar otros estados si es necesario
            }
        } catch (error) {
            // Manejar errores de red u otros errores de la operación GraphQL
            console.error("Error al realizar la operación GraphQL:", error);
            // Mostrar un mensaje de error genérico en la interfaz de usuario
            alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde si tenes ganas");
        }
    };

    return (
        <form>
            <ul className="grid grid-cols-8 gap-4 px-10 sm:px-10 text-gray-400 xl:mt-16">
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Nombre: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setName(event.target.value);
                            console.log(name);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setCategory(event.target.value);
                            console.log(category);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setCode(event.target.valueAsNumber);
                            console.log(code);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Vencimiento: </label>
                        <div className="flex flex-row justify-around gap-2">
                            <input type="number" placeholder="Dia" className="w-1/3 text-center rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                                setDay(event.target.valueAsNumber);
                                console.log(day);
                            }} />
                            <input type="number" placeholder="Mes" className="w-1/3 text-center rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                                setMonth(event.target.valueAsNumber);
                                console.log(month);
                            }} />
                            <input type="number" placeholder="Año" className="w-1/3 text-center rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                                setYear(event.target.valueAsNumber);
                                console.log(year);
                            }} />
                        </div>
                    </li>
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Stock: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setStock(event.target.valueAsNumber);
                            console.log(stock);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setCost(event.target.valueAsNumber);
                            console.log(cost);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Descuento: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setDiscount(event.target.valueAsNumber);
                            console.log(discount);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" onChange={(event) => {
                            setPrice(event.target.valueAsNumber);
                            console.log(price);
                        }} />
                    </li>
                </div>
                <div className="col-span-8 text-center">
                    <button className="hover:bg-[#2c3e19d8] px-6 py-2 border border-[#5c9c19d8] hover:text-white text-[#5c9c19d8] w-full rounded-md" onClick={add}>
                        REGISTRAR
                    </button>
                </div>
            </ul >
        </form>
    );
};