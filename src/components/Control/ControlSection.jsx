import { useState, useEffect, useRef } from "react";
import { NavbarSections } from "./NavbarSections";
import { AlmacenSection } from "./AlmacenSection";
import { loadProductsByCategory } from "../../services/ProductService";
import { DailySaleComponent } from "./products/DailySaleComponent";
import { UpdateProduct } from "./products/UpdateProduct";
import { useSearchContext } from "../../services/SearchProvider";
import { RiSearch2Line } from "react-icons/ri";
import { searchName } from "../../utils/SearchName";

export function ControlSection({ totalSaleOfTheDay }) {

    const { search, setSearch, searchProducts, setSearchProducts } = useSearchContext();
    const [products, setProducts] = useState([]);
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [editOn, setEditOn] = useState(false);
    const [productEdit, setProductEdit] = useState([]);
    const { currentCategory, setCurrentCategory } = useSearchContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef(null);
    let res = [];

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

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleBlur = () => {
        if (search === '') {
            setIsExpanded(false);
        }
    };

    const handleSearch = async (e) => {
        if (e.target.value) {
            setSearch(e.target.value);
            res = await searchName(productList, e.target.value);
            setFilteredProducts(res);
        } else { setSearch("") }
        console.log(res);
    };

    const searchItem = async () => {
        //inputRef.current.focus();
        const productsList = await loadProductsByCategory(currentCategory);
        setSearchProducts(true);
        handlePageChange(currentCategory, productsList);
    }

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
            <div className="flex flex-row justify-end md:items-center gap-4 px-4">
                <div className="absolute top-[120px] md:top-[80px]">
                    <div className="w-full relative">
                        <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer" onClick={searchItem} />
                        <input type="text"
                            placeholder="Producto"
                            value={search ? search : ""}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleSearch}
                            onClick={searchItem}
                            className={`bg-[#1F1D2B] py-2 p-10 pr-4 rounded-lg text-gray-300 outline-none transition-width duration-300 ease-in-out cursor-pointer ${isExpanded ? 'w-40' : 'w-10'}`}
                        />
                    </div>
                </div>
            </div>

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