import { useState, useEffect } from "react";
import { NavbarSections } from "./NavbarSections";
import { TitleSection } from "../shared/TitleSection";
import { AlmacenSection } from "./products/Almacen/AlmacenSection";
import { loadProductsByCategory } from "../../components/shared/ProductService";
import { DailySaleComponent } from "./products/DailySaleComponent";

export function ControlSection({ totalSaleOfTheDay, setSearchProducts, searchProducts, search, setSearch }) {

    const [currentCategory, setCurrentCategory] = useState('Almacen');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await loadProductsByCategory(currentCategory);
                setProductList(products);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };
        loadProducts();
    }, [currentCategory]);

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    return (
        <div className="xl:col-span-6 sm:p-2 p-1 lg:p-4 xl:p-2 xl:h-screen">
            {/* Header */}
            <header>
                {/* Title */}
                <TitleSection />
                <NavbarSections currentPage={handleCategoryChange} />
            </header>
            <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-auto">
                <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-8 lg:py-6 rounded-xl items-center text-center text-gray-300 col-span-3">
                    <DailySaleComponent currentPage={currentCategory} totalSaleOfTheDay={totalSaleOfTheDay} />
                    <AlmacenSection productsList={productList} cat={currentCategory} searchProducts={searchProducts} setSearchProducts={setSearchProducts} search={search} setSearch={setSearch} />
                </div>
            </div>
        </div>
    );
};