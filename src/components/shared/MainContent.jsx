import { HistorySection } from "../Control/history/HistorySection";
import { ControlSection } from "../Control/ControlSection";
import { HomeSection } from "../Home/HomeSection";
import { useEffect, useState } from "react";
import { SaleSection } from "../Sale/SaleSection";
import { TitleSection } from "../shared/TitleSection";

export function MainContent({ selectedCat }) {

    const [totalSaleOfTheDay, setTotalSaleOfTheDay] = useState(0);
    const [allSales, setAllSales] = useState([]);

    return (
        <main className="lg:pl-24 grid grid-cols-1 xl:grid-cols-8 py-2 md:px-4 xl:pb-5 sm:h-[785px]">
            <header className="mb-10">
                <TitleSection />
                {selectedCat === 'Home' &&
                    <HomeSection />
                }
                {selectedCat === 'Ventas' &&
                    <SaleSection totalSaleOfTheDay={totalSaleOfTheDay}
                        setTotalSaleOfTheDay={setTotalSaleOfTheDay}
                        setAllSales={setAllSales}
                    />
                }
                {selectedCat === 'Control' &&
                    <ControlSection totalSaleOfTheDay={totalSaleOfTheDay} />
                }
            </header>
            <HistorySection allSales={allSales} setAllSales={setAllSales} />
        </main>
    );
};