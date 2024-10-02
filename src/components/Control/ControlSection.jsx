import { useState, useEffect, useRef } from "react";
import { NavbarSections } from "./NavbarSections";
import { AlmacenSection } from "./AlmacenSection";
import { loadProductsByCategory } from "../../services/ProductService";
import { UpdateProduct } from "./products/UpdateProduct";
import { useSearchContext } from "../../services/SearchProvider";

export function ControlSection({ totalSaleOfTheDay, productList, setProductList, filteredProducts, setFilteredProducts }) {

    const { search, setSearch, searchProducts, setSearchProducts } = useSearchContext();
    const [products, setProducts] = useState([]);
    const [editOn, setEditOn] = useState(false);
    const [productEdit, setProductEdit] = useState([]);
    const { currentCategory, setCurrentCategory } = useSearchContext();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await loadProductsByCategory(currentCategory);
                setProductList(products);
                console.log('Productos cargados: ', products.length);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };
        loadProducts();
    }, [currentCategory]);

    const handlePageChange = async (category, prod) => {
        const lowercaseCategory = category.toLowerCase();
        const results = await prod.filter((data) => data.category.toLowerCase().includes(lowercaseCategory));
        if (!results) {
            console.log("NO HAY PRODUCTOS");
            setProducts([]);
        } else {
            setProducts(results);
            return results;
        }
    }

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
    }

    return (
        <div className="xl:col-span-6 sm:p-2 p-1 lg:p-4 xl:p-2 xl:h-screen">
            {/* Header */}
            {/* <TitleSection /> */}
            <NavbarSections currentPage={handleCategoryChange} />
            {editOn && <UpdateProduct editMode={editMode} productEdit={productEdit} currentPage={currentCategory} productList={productList} />}
            <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-auto">
                <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-8 lg:py-6 rounded-xl items-center text-center text-gray-300 col-span-3">
                    {/* <DailySaleComponent currentPage={currentCategory} totalSaleOfTheDay={totalSaleOfTheDay} /> */}
                    <AlmacenSection productsList={productList} filteredProducts={filteredProducts} cat={currentCategory} editMode={editMode} />
                </div>
            </div>
        </div>
    );
};