import { React, useState, useEffect } from "react";
import { TitleSection } from "../shared/TitleSection";
import { ItemDescription } from "./ItemDescription";
import { RiSearch2Line } from "react-icons/ri";
import { FindContent } from "./FindContent";
import { PrintReceipt } from "./PrintReceip";
import { actualizeStock, loadAllProducts } from "../shared/ProductService";
import { searchName } from "../shared/searchName";
import { addSale, getSales } from "../shared/SalesService";

export function SaleSection({ totalSaleOfTheDay, setTotalSaleOfTheDay, setAllSales, searchProducts, setSearchProducts, search, setSearch }) {

    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState([]);
    const [initialStocks, setInitialStocks] = useState({});
    const [quantity, setQuantity] = useState({});
    const [newStock, setNewStock] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [printReceipt, setPrintReceipt] = useState(false);
    const [printTicket, setPrintTicket] = useState({ ticket: null });
    let results = [];

    useEffect(() => {
        loadProducts();
        setSearch("")
    }, []);

    const loadProducts = async () => {
        const productList = await loadAllProducts();
        setProducts(productList);
    }

    const searchItem = async () => {
        setSearchProducts(true);
    }

    const handleFind = (e) => {
        if (e.target.value) {
            setSearch(e.target.value);
            results = searchName(products, e.target.value);
            setSearchProducts(true);
            setFilteredProducts(results);
        } else { setSearch("") }
        console.log(results);
    }

    const storeInitialStock = async (productId, stock, price, product) => {
        setInitialStocks(prevState => ({
            ...prevState,
            [productId]: stock
        }));
        setSelectProduct([...selectProduct, product]);
        setTotal(total + price);
        setSearchProducts(!searchProducts);
        setNewStock(stock);
        setSearch("");
        console.log(product);
    };

    const addProduct = async (product, stock) => {
        try {
            if (product && stock === 0) {
                alert("No hay stock disponible de ese producto!");
                return searchItem();
            }
            if (!initialStocks.hasOwnProperty(product.id)) {
                await storeInitialStock(product.id, product.stock - 1, product.price, product);
            } else {
                if (initialStocks[product.id] === 0) {
                    return alert("No hay stock disponible de ese producto!");
                }
                await storeInitialStock(product.id, initialStocks[product.id] - 1, product.price, product);
            }
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    const removeProduct = async (index, price, productId) => {
        const updatedProducts = selectProduct.filter((_, i) => i !== index);
        setSelectProduct(updatedProducts);
        setInitialStocks(prevState => ({
            ...prevState,
            [productId]: initialStocks[productId] + 1
        }));
        console.log("Stock: ", initialStocks[productId]);
        setTotal((total) - price);
    };

    const cancelOperation = () => {
        setSelectProduct([]);
        setTotal(0);
        setInitialStocks({});
    }

    const chargeProducts = async () => {
        if(total === 0) return alert("Debe seleccionar al menos un producto primero");
        setPrintReceipt(!printReceipt);
        await actualizeStock(selectProduct, initialStocks);
        const actializeSales = await addSale(selectProduct);
        console.log(actializeSales);
        getSales(setAllSales);
        setTotalSaleOfTheDay(totalSaleOfTheDay+total);
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
                            {searchProducts && (
                                <FindContent
                                    products={!filteredProducts && products.length > 0 ? products : filteredProducts}
                                    addProduct={addProduct}
                                />
                            )}
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