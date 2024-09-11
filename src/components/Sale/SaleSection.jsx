import { React, useState, useEffect } from "react";
import { TitleSection } from "../shared/TitleSection";
import { ItemDescription } from "./ItemDescription";
import { RiSearch2Line } from "react-icons/ri";
import { FindContent } from "./FindContent";
import { PrintReceipt } from "./PrintReceip";
import { actualizeStock, loadAllProducts } from "../../services/ProductService";
import { searchName } from "../../utils/SearchName";
import { addSale, getSales, loadDailySales } from "../../services/SalesService";
import { useSearchContext } from "../../services/SearchProvider";
import { CurrentTime } from "../shared/Clock";

export function SaleSection({ totalSaleOfTheDay, setTotalSaleOfTheDay, setAllSales, allSales }) {

    const { search, setSearch, searchProducts, setSearchProducts } = useSearchContext();
    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState([]);
    const [initialStocks, setInitialStocks] = useState({});
    const [quantity, setQuantity] = useState({});
    const [newStock, setNewStock] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [subTotal, setSubTotal] = useState({});
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
        console.log("Buscando");
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
        setSubTotal(prevSubTotal => ({
            ...prevSubTotal,
            [productId]: price
        }));
        setQuantity( prevQuantity => ({
            ...prevQuantity,
            [productId]: 1
        }));
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

    const updateSubtotal = async (productId) => {
        setSubTotal(subTotal * quantity[productId]);
    }

    const addQuantity = async (productId, productPrice) => {
        setQuantity( prevQuantity => ({
            ...prevQuantity,
            [productId]: quantity[productId]+1
        }));
        setSubTotal(prevSubTotal => ({
            ...prevSubTotal,
            [productId]: (prevSubTotal[productId] || productPrice) + productPrice // Actualiza el subtotal de este producto
        }));
    
        setTotal(total + productPrice); // Aumenta el total global con el precio del producto
    }
    const subtractQuantity = (productId, productPrice) => {
        setQuantity( prevQuantity => ({
            ...prevQuantity,
            [productId]: quantity[productId]-1
        }));
        setSubTotal(prevSubTotal => ({
            ...prevSubTotal,
            [productId]: (prevSubTotal[productId] || productPrice) - productPrice // Actualiza el subtotal de este producto
        }));
    
        setTotal(total - productPrice); // Aumenta el total global con el precio del producto
    }

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
        const currentDateTime = CurrentTime();
        if(total === 0) return alert("Debe seleccionar al menos un producto primero");
        setPrintReceipt(!printReceipt);
        await actualizeStock(selectProduct, initialStocks);
        await addSale(selectProduct);
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
            <div className="px-1 md:bg-[#1F1D2B] rounded-xl sm:px-2 md:px-4 sm:min-h-[720px]">
                <div className="sm:pt-8 text-gray-300 sm:p-6 xl:p-2">
                    <div className="grid sm:grid-cols-9 sm:text-2xl mb-2 py-2 px-1 sm:px-6 md:border md:border-[#5c9c19d8] rounded-xl gap-1 w-full">
                        <div className="sm:col-span-3 row-span-2 md:text-center px-2">
                            <label className="text-3xl xl:text-2xl">Busqueda de artículo: </label>
                        </div>
                        <div className="sm:col-span-6  relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg p-2 sm:p-0">
                            <RiSearch2Line className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                            <input type="text" className="text-gray-400 pl-2 text-[16px] sm:text-sm outline-none w-full bg-transparent" value={search} placeholder="NOMBRE" onChange={handleFind} onClick={searchItem} />
                            {searchProducts && (
                                <FindContent
                                    products={!filteredProducts && products.length > 0 ? products : filteredProducts}
                                    addProduct={addProduct}
                                />
                            )}
                        </div>
                        <div className="sm:col-span-6 relative bg-[#2c3e19d8] pl-6 sm:pl-10 rounded-lg p-2 sm:p-0">
                            <RiSearch2Line className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                            <input type="text" className="text-gray-400 pl-2 text-[16px] sm:text-sm outline-none w-full bg-transparent" placeholder="CODIGO" />
                        </div>
                    </div>
                    <div className="relative bg-[#262837] rounded-xl">
                        {printReceipt && <PrintReceipt products={selectProduct} total={total} quantity={quantity} subTotal={subTotal} quit={quit} />}
                        <ItemDescription products={selectProduct} removeProduct={removeProduct} total={total} cancelOperation={cancelOperation} chargeProducts={chargeProducts} quantity={quantity} addQuantity={addQuantity} subtractQuantity={subtractQuantity} subTotal={subTotal} />
                    </div>
                </div>
            </div>
        </div>
    );
};