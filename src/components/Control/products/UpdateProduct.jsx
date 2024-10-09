import { useState, useEffect, useRef } from "react";
import { deleteProduct, loadProductsByCategory, updateProduct } from "../../../services/ProductService";
import { useSearchContext } from "../../../services/SearchProvider";
import { ButtonSave, ButtonDelete } from "../../shared/ButtonsEditProduct";
import { UpdateField } from "./UpdateField";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es');

export function UpdateProduct({ productList, currentPage, editMode, productEdit }) {

    const { search, setSearch, searchProducts, setSearchProducts, setCurrentCategory } = useSearchContext();
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
            setCurrentCategory(currentPage);
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
                    <UpdateField title={'Nombre:'} name={'name'} value={actualizeProduct.name} handleChange={handleChange} />
                    <UpdateField title={'Categoría:'} name={'category'} value={actualizeProduct.category} />
                    <UpdateField title={'Código:'} name={'code'} value={actualizeProduct.code} handleChange={handleChange} />
                    <UpdateField title={'Vencimiento:'} value={!expiration ? actualizeProduct.expiration : expiration} expiration={expiration} setExpiration={setExpiration} />
                </div>
                <div className="grid col-span-8 sm:col-span-4 gap-2">
                    <UpdateField title={'Stock:'} name={'stock'} value={actualizeProduct.stock} handleChange={handleChange} />
                    <UpdateField title={'Costo:'} name={'cost'} value={actualizeProduct.cost} handleChange={handleChange} />
                    <UpdateField title={'Descuento:'} name={'discount'} value={actualizeProduct.discount ? actualizeProduct.discount : "0"} handleChange={handleChange} />
                    <UpdateField title={'Precio final:'} name={'price'} value={actualizeProduct.price} handleChange={handleChange} />
                </div>
                <div className="col-span-8 text-center">
                    <ButtonSave />
                </div>
                <div className="col-span-8 text-center">
                    <ButtonDelete onClick={() => productForDelete(actualizeProduct)}/>
                </div>
            </ul >
        </form>
    );
};
