import { HistorySection } from "../Control/history/HistorySection";
import { ControlSection } from "../Control/ControlSection";
import { HomeSection } from "../Home/HomeSection";
import { useEffect, useState } from "react";
import { SaleSection } from "../Sale/SaleSection";
import { loadAllProducts } from "../../services/ProductService";

export function MainContent({ selectedCat, searchProducts, setSearchProducts, search, setSearch }) {

    const [totalSaleOfTheDay, setTotalSaleOfTheDay] = useState(0);
    const [allProducts, setAllProducts] = useState([]);
    const [allSales, setAllSales] = useState([]);
    const productsList = loadAllProducts();
    
    return (
        <main className="lg:pl-24 grid grid-cols-1 xl:grid-cols-8 py-2 md:px-4 xl:pb-5 sm:h-[785px]">
            {selectedCat === 'Home' && <HomeSection />}
            {selectedCat === 'Ventas' && 
                <SaleSection totalSaleOfTheDay={totalSaleOfTheDay} 
                    setTotalSaleOfTheDay={setTotalSaleOfTheDay} 
                    setAllSales={setAllSales} 
                    searchProducts={ searchProducts } 
                    setSearchProducts={ setSearchProducts } 
                    search={search} 
                    setSearch={setSearch}
                />
            }
            {selectedCat === 'Control' && 
                <ControlSection totalSaleOfTheDay={totalSaleOfTheDay} 
                    searchProducts={ searchProducts } 
                    setSearchProducts={ setSearchProducts } 
                    search={search} 
                    setSearch={setSearch}
                />
            }
            <HistorySection allSales={allSales} setAllSales={setAllSales}/>
        </main>
    );
};