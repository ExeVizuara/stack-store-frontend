import { useState, useEffect, useRef } from "react";
import { deleteProduct, updateProduct } from "../../../services/ProductService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
import { useSearchContext } from "../../../services/SearchProvider";
registerLocale('es', es)
setDefaultLocale('es');

export function UpdateProduct({ productList, currentPage, editMode, productEdit }) {

    const { search, setSearch, searchProducts, setSearchProducts } = useSearchContext();
    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [actualizeProduct, setActualizeProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [expiration, setExpiration] = useState("");

    useEffect(() => {
        console.log(currentPage)
        setActualizeProduct({
            id: productEdit.id,
            name: productEdit.name,
            category: productEdit.category,
            code: productEdit.code,
            expiration: productEdit.expiration,
            stock: productEdit.stock,
            cost: productEdit.cost,
            discount: productEdit.discount,
            price: productEdit.price
        });
    }, []);

    const handleChange = (e) => {
        setActualizeProduct({
            ...actualizeProduct,
            [e.target.name]: e.target.value
        });
    };

    const update = async (event) => {
        event.preventDefault();
        console.log(actualizeProduct);
        try {
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
            editMode();
        } catch (error) {
            console.log("Error al procesar la solicitud")
        }
    }

    const productForDelete = async (product) => {

        const productID = product.id;
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
        if (isConfirmed) {
            try {
                await deleteProduct(productID);
                editMode();
                alert('Producto eliminado correctamente');
            } 
            catch (error) {
                console.log('Ocurrió un error')
            }
        }
    }

    const addProduct = async (productEdit) => {
        try {
            setActualizeProduct({
                id: productEdit.id,
                name: productEdit.name,
                category: productEdit.category,
                code: productEdit.code,
                expiration: productEdit.expiration,
                stock: productEdit.stock,
                cost: productEdit.cost,
                discount: productEdit.discount,
                price: productEdit.price
            });
            console.log(productEdit);
            setSelectProduct(productEdit.name);
            setSearchProducts(false);
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <form onSubmit={update}>
            <ul className="absolute left-[10%] top-6 sm:top-4 sm:left-[30%] grid grid-cols-8 gap-4 px-10 sm:py-5 py-5 sm:px-10 text-gray-400 xl:mt-16 bg-white rounded-md">
                <button className="absolute right-2 top-1 bg-red-500 border border-red-800 px-1" onClick={editMode}>x</button>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            value={actualizeProduct.name}
                            required className="sm:w-full rounded-md bg-gray-500 p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Categoría: </label>
                        <input
                            type="text"
                            name="category"
                            value={actualizeProduct.category}
                            required className="sm:w-full rounded-md bg-gray-500 p-1"
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Código: </label>
                        <input
                            type="text"
                            name="code"
                            value={actualizeProduct.code}
                            required className="sm:w-full rounded-md bg-gray-500 p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Vencimiento: </label>
                        <DatePicker
                            className="sm:w-full rounded-md bg-gray-500 p-1"
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
                            required className="sm:w-full rounded-md bg-gray-500 p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Costo: </label>
                        <input
                            type="text"
                            name="cost"
                            value={actualizeProduct.cost}
                            required className="sm:w-full rounded-md bg-gray-500 p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Descuento: </label>
                        <input
                            type="text"
                            name="discount"
                            value={actualizeProduct.discount ? actualizeProduct.discount : "0"}
                            className="sm:w-full rounded-md bg-gray-500 p-1"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="flex flex-col">
                        <label className="text-start sm:p-1">Precio final: </label>
                        <input
                            type="text"
                            name="price"
                            value={actualizeProduct.price}
                            className="sm:w-full rounded-md bg-gray-500 p-1"
                            onChange={handleChange}
                        />
                    </li>
                </div>
                <div className="col-span-8 text-center">
                    <button type="submit" className="bg-[#2c3e19d8] px-6 py-2 border border-[#5c9c19d8] text-white w-full rounded-md">
                        GUARDAR
                    </button>
                </div>
                <div className="col-span-8 text-center">
                    <button type="button" onClick={()=> productForDelete(actualizeProduct)} className="hover:bg-red-800 px-6 py-2 border bg-red-500 border-red-800 hover:text-white w-full rounded-md">
                        ELIMINAR PRODUCTO
                    </button>
                </div>
            </ul >
        </form>
    );
};
