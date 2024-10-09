import { useState, useEffect, useRef } from "react";
import { NavbarSections } from "./NavbarSections";
import { AlmacenSection } from "./AlmacenSection";
import { loadProductsByCategory } from "../../services/ProductService";
import { UpdateProduct } from "./products/UpdateProduct";
import { useSearchContext } from "../../services/SearchProvider";

export function ControlSection({ totalSaleOfTheDay, productList, setProductList, filteredProducts, setFilteredProducts }) {

    const [editOn, setEditOn] = useState(false);
    const [productEdit, setProductEdit] = useState([]);
    const { currentCategory, setCurrentCategory, isLoading, setIsLoading } = useSearchContext();

    const loadProducts = async () => {
        try {
            const products = await loadProductsByCategory(currentCategory);
            setProductList(products);
            console.log('Productos cargados: ', products.length);
            setIsLoading(false);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        }
    };

    useEffect(() => {
        loadProducts();
    }, [currentCategory]);

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    const selectProductEdit = async (product) => {
        setProductEdit(product);
    }

    const editMode = async (product) => {
        setEditOn(!editOn);
        console.log(product);
        await selectProductEdit(product);
        loadProducts();
    }

    return (
        <div className="xl:col-span-6 sm:p-2 p-1 lg:p-4 xl:p-2 xl:h-screen">
            {/* Header */}
            {/* <TitleSection /> */}
            <NavbarSections currentPage={handleCategoryChange} />
            {editOn && <UpdateProduct editMode={editMode} productEdit={productEdit} currentPage={currentCategory} productList={productList} />}
            <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-auto">
                <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-8 lg:py-6 rounded-xl items-center text-center text-gray-300 col-span-3">
                    <AlmacenSection productsList={productList} filteredProducts={filteredProducts} cat={currentCategory} editMode={editMode} />
                </div>
            </div>
        </div>
    );
};