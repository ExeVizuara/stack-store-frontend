import { HistorySection } from "../Control/history/HistorySection";
import { ControlSection } from "../Control/ControlSection";
import { HomeSection } from "../Home/HomeSection";
import { React } from "react";
import { SaleSection } from "../Sale/SaleSection";

export function MainContent({ selectedCat, searchProducts, setSearchProducts }) {

    return (
        
        <main className="lg:pl-24 grid grid-cols-1 xl:grid-cols-8 py-2 md:px-4 xl:pb-5 h-[785px]">
            {selectedCat === 'Home' && <HomeSection />}
            {selectedCat === 'Ventas' && <SaleSection />}
            {selectedCat === 'Control' && <ControlSection searchProducts={ searchProducts } setSearchProducts={ setSearchProducts }/>}
            <HistorySection />
        </main>
    );
};