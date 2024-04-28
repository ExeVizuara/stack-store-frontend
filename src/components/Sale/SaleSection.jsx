import { React, useEffect, useState } from "react";
import { TitleSection } from "../shared/TitleSection";
import { ItemDescription } from "./ItemDescription";
import { RiSearch2Line } from "react-icons/ri";
import { FindContent } from "./FindContent";
import { PrintReceipt } from "./PrintReceip";
import { generateClient  } from "aws-amplify/api";
import { listProducts } from "../../graphql/queries";

export function SaleSection() {

    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState(false);
    const [selectProduct, setSelectProduct] = useState([]);
    const [initialStocks, setInitialStocks] = useState({});
    const [newStock, setNewStock] = useState(0);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0);
    const [printReceipt, setPrintReceipt] = useState(false);
    const [printTicket, setPrintTicket] = useState({ ticket: null});
    const API = generateClient();

    const loadProducts = async () => {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        setProducts(productsFromAPI);
    };

    const handleFind = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };

    const searchItem = () => {
        setSearchProducts(true);
        loadProducts();
    }

    let results = [];
    if (!search) {
        results = products;
    } else {
        results = products.filter((data) =>
            data.name.toLowerCase().includes(search.toLocaleLowerCase()));
    }

    const storeInitialStock = async (productId, stock) => {
        setInitialStocks(prevState => ({
            ...prevState,
            [productId]: stock
        }));
        setNewStock(stock-1);
        stockManagment();
    };

    const stockManagment = () => {
        console.log(newStock);
    }

    const addProduct = async (product) => {
        try {
            // Verificar si existe un valor inicial para el stock del producto
            if (!initialStocks.hasOwnProperty(product.id)) {
                storeInitialStock(product.id, product.stock - 1);
            } else {
                // Verificar si ya se utilizó todo el stock del producto
                if (initialStocks[product.id] === 0) {
                    console.log("No hay más stock disponible para este producto.");
                    return;
                }
                storeInitialStock(product.id, initialStocks[product.id] - 1);
            }
    
            // Resto del código para agregar el producto
            console.log(product);
            setSelectProduct([...selectProduct, product]);
            setTotal(total + product.price);
            setSearchProducts(!searchProducts);
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    const removeProduct = (index, price) => {
        const updatedProducts = selectProduct.filter((_, i) => i !== index);
        setSelectProduct(updatedProducts);
        setTotal((total) - price);
    };

    const cancelOperation = () => {
        setSelectProduct([]);
        setTotal(0);
        setInitialStocks({});
    }

    const chargeProducts = async () => {
        setPrintReceipt(!printReceipt);

        // try {
        //     const formData = new FormData();
        //     formData.append('ticket', post.photo);

        //     await Axios.post(`${BackendURL}/upload`, formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data"
        //         }
        //     })
        // } catch (error) {
        //     console.log("Error al guardar ticket,", error)
        // }
    }

    const quit = () => {
        setPrintReceipt(!printReceipt);
        setSelectProduct([]);
        setTotal(0);
    }

    return (
        <div className="xl:col-span-6 sm:p-2 lg:p-4 xl:p-2">
            {/* Header */}
            <header className="mb-5">
                {/* Title and search */}
                <TitleSection />
            </header>
            <div className="px-1 md:bg-[#1F1D2B] rounded-xl sm:px-2 md:px-4 sm:min-h-[720px]">
                <div className="sm:pt-8 text-gray-300 sm:p-6 xl:p-2">
                    <div className="grid grid-cols-9 sm:text-2xl mb-2 py-2 px-1 sm:px-6 md:border md:border-[#5c9c19d8] rounded-xl gap-1 w-full">
                        <div className="col-span-3 row-span-2 md:text-center px-2">
                            <label className="text-lg xl:text-2xl">Busqueda de artículo: </label>
                        </div>
                        <div className="col-span-3 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg">
                            <RiSearch2Line className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                            <input type="text" className="text-gray-300 text-[11px] sm:text-sm outline-none w-full bg-transparent" value={search} placeholder="NOMBRE" onChange={handleFind} onClick={searchItem} />
                            {searchProducts && <FindContent products={results} addProduct={addProduct} />}
                        </div>
                        <div className="col-span-3 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg">
                            <RiSearch2Line className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                            <input type="text" className="text-gray-300 text-[11px] sm:text-sm outline-none w-full bg-transparent" placeholder="CATEGORIA" />
                        </div>
                        <div className="col-span-3 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg">
                            <RiSearch2Line className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                            <input type="text" className="text-gray-300 text-[11px] sm:text-sm outline-none w-full bg-transparent" placeholder="CODIGO" />
                        </div>
                        <div className="col-span-3 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg">
                            <RiSearch2Line className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                            <input type="text" className="text-gray-300 text-[11px] sm:text-sm outline-none w-full bg-transparent" placeholder="VENCIMIENTO" />
                        </div>
                    </div>
                    <div className="relative bg-[#262837] rounded-xl">
                        {printReceipt && <PrintReceipt products={selectProduct} total={total} quit={quit} />}
                        <ItemDescription products={selectProduct} removeProduct={removeProduct} total={total} cancelOperation={cancelOperation} chargeProducts={chargeProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
};