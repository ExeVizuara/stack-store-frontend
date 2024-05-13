import { useState, useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FindContent } from "../../Sale/FindContent";
import { updateProduct } from "../../shared/ProductService";
import { searchName } from "../../shared/searchName";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es');

export function UpdateProduct({ productList, currentPage, searchProducts, setSearchProducts, search, setSearch }) {

    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [actualizeProduct, setActualizeProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [expiration, setExpiration] = useState("");
    let results = [];

    useEffect(() => {
        setActualizeProduct({
            id: "",
            name: "",
            category: currentPage,
            code: "",
            expiration: "",
            stock: "",
            cost: "",
            discount: "",
            price: ""
        });
    }, []);

    const searchItem = async () => {
        const productsList = await productList;
        setSearchProducts(true);
        handlePageChange(currentPage, productsList);
    }

    const handleFind = (e) => {
        if (e.target.value) {
            setSearch(e.target.value);
            results = searchName(products, e.target.value);
            setFilteredProducts(results);
        } else { setSearch("") }
        console.log(results);
    };

    const handlePageChange = async (category, prod) => {
        const lowercaseCategory = category.toLowerCase();
        const results = await prod.filter((data) => data.category.toLowerCase().includes(lowercaseCategory));
        if (!results) {
            console.log("NO HAY PRODUCTOS");
            setProducts([]);
        } else {
            setProducts(results);
            console.log(results);
        }
    };

    const handleChange = (e) => {
        setActualizeProduct({
            ...actualizeProduct,
            [e.target.name]: e.target.value
        });
    };

    const update = async (event) => {
        event.preventDefault();
        updateProduct({
            id: actualizeProduct.id,
            name: actualizeProduct.name,
            category: actualizeProduct.category,
            code: actualizeProduct.code,
            expiration: expiration,
            stock: actualizeProduct.stock,
            cost: actualizeProduct.cost,
            discount: actualizeProduct.discount,
            price: actualizeProduct.price
        });
        setActualizeProduct({
            id: "",
            name: "",
            category: currentPage,
            code: "",
            expiration: "",
            stock: "",
            cost: "",
            discount: "",
            price: ""
        });
        setSearch("");
    }

    const addProduct = async (product) => {
        try {
            setActualizeProduct({
                id: product.id,
                name: product.name,
                category: product.category,
                code: product.code,
                expiration: product.expiration,
                stock: product.stock,
                cost: product.cost,
                discount: product.discount,
                price: product.price
            });
            console.log(product);
            setSelectProduct(product.name);
            setSearchProducts(false);
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <form onSubmit={update}>
            <ul className="grid grid-cols-8 gap-4 px-10 sm:px-10 text-gray-400 xl:mt-16">
                <div className="col-span-4 text-center">
                    <label className="text-lg xl:text-2xl">Busqueda de artículo: </label>
                </div>
                <div className="col-span-4 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg">
                    <RiSearch2Line className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                    <input type="text" className="text-gray-300 text-[11px] sm:text-sm outline-none w-full bg-transparent" value={search ? search : ""} placeholder="NOMBRE" onChange={handleFind} onClick={searchItem} />
                    {searchProducts && <FindContent products={filteredProducts} addProduct={addProduct} />}
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                    <label className="text-start sm:p-1">Nombre: </label>
                        <input 
                            type="text" 
                            name="name"
                            value={actualizeProduct.name}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" 
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input 
                            type="text" 
                            name="category"
                            value={actualizeProduct.category} 
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input 
                            type="text" 
                            name="code"
                            value={actualizeProduct.code}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Vencimiento: </label>
                        <DatePicker
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            selected={actualizeProduct.expiration}
                            showIcon
                            isClearable
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => {
                                if (!date) { setExpiration("") }
                                else {
                                    const formattedDate = date.toISOString().split('T')[0];
                                    setExpiration(formattedDate);
                                }
                            }
                        } />
                    </li>
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Stock: </label>
                        <input 
                            type="text" 
                            name="stock"
                            value={actualizeProduct.stock}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange} 
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input 
                            type="text" 
                            name="cost"
                            value={actualizeProduct.cost}
                            required className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1" 
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Descuento: </label>
                        <input 
                            type="text" 
                            name="discount"
                            value={actualizeProduct.discount}
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input 
                            type="text" 
                            name="price"
                            value={actualizeProduct.price}
                            className="sm:w-full rounded-md bg-[#1F1D2B] md:bg-[#262837] p-1"
                            onChange={handleChange} 
                        />
                    </li>
                </div>
                <div className="col-span-8 text-center">
                    <button type="submit" className="hover:bg-[#2c3e19d8] px-6 py-2 border border-[#5c9c19d8] hover:text-white text-[#5c9c19d8] w-full rounded-md">
                        GUARDAR
                    </button>
                </div>
            </ul >
        </form>
    );
};