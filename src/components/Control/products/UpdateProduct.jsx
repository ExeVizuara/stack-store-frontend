import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { RiSearch2Line } from "react-icons/ri";
import { FindContent } from "../../Sale/FindContent";
import { loadProducts, updateProduct } from "../../shared/ProductService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es');

export function UpdateProduct({ currentPage, searchProducts, setSearchProducts }) {

    const API = generateClient();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectProduct, setSelectProduct] = useState([]);
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [category, setCategory] = useState(currentPage);
    const [code, setCode] = useState("");
    const [expiration, setExpiration] = useState("");
    const [stock, setStock] = useState(0);
    const [cost, setCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [price, setPrice] = useState(0);
    let results = [];

    useEffect(() => {
        loadProducts();
    }, [currentPage]);

    const handleFind = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };

    const searchItem = async () => {
        setSearchProducts(true);
        const allProducts = await loadProducts();
        handlePageChange(currentPage, allProducts);
    }

    const handlePageChange = async (category, prod) => {
        const lowercaseCategory = category.toLowerCase();
        const results = prod.filter((data) => data.category.toLowerCase().includes(lowercaseCategory));
        if (!results) {
          console.log("NO HAY PRODUCTOS")
          setProducts([]);
        } else {
          setProducts(results)
          console.log(results);
        }
      };

    if (!search) {
        results = products;
        console.log(products);
    } else {
        results = products.filter((data) =>
            data.name.toLowerCase().includes(search.toLocaleLowerCase()));
        console.log(results);
    }

    const update = async (event) => {
        event.preventDefault();
        updateProduct(id, name, category, code, expiration, stock, cost, discount, price);
    }

    const addProduct = async (product) => {
        try {
            setId(product.id);
            setName(product.name);
            setCategory(product.category);
            setCode(product.code);
            setExpiration(product.expiration);
            setStock(product.stock);
            setCost(product.cost);
            setDiscount(product.discount);
            setPrice(product.price);
            console.log(product);
            setSelectProduct(product.name);
            setSearchProducts(false);
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <form>
            <ul className="grid grid-cols-8 gap-4 px-10 sm:px-10 text-gray-400 xl:mt-16">
                <div className="col-span-4 text-center">
                    <label className="text-lg xl:text-2xl">Busqueda de artículo: </label>
                </div>
                <div className="col-span-4 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg">
                    <RiSearch2Line className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                    <input type="text" className="text-gray-300 text-[11px] sm:text-sm outline-none w-full bg-transparent" value={search ? search : ""} placeholder="NOMBRE" onChange={handleFind} onClick={searchItem} />
                    {searchProducts && <FindContent products={results} addProduct={addProduct} />}
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Nombre: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={name} onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={category} onChange={(event) => {
                            setCategory(event.target.value);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input type="text" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={code} onChange={(event) => {
                            setCode(event.target.value);
                        }} />
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
                            }
                            } />
                    </li>
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Stock: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={stock} onChange={(event) => {
                            setStock(event.target.valueAsNumber);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={cost} onChange={(event) => {
                            setCost(event.target.valueAsNumber);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Descuento: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={discount} onChange={(event) => {
                            setDiscount(event.target.valueAsNumber);
                        }} />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input type="number" required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" value={price} onChange={(event) => {
                            setPrice(event.target.valueAsNumber);
                        }} />
                    </li>
                </div>
                <div className="col-span-8 text-center">
                    <button className="hover:bg-[#2c3e19d8] px-6 py-2 border border-[#5c9c19d8] hover:text-white text-[#5c9c19d8] w-full rounded-md"
                    onClick={update}>
                        GUARDAR
                    </button>
                </div>
            </ul >
        </form>
    );
};