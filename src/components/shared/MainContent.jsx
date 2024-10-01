import { HistorySection } from "../Control/history/HistorySection";
import { ControlSection } from "../Control/ControlSection";
import { HomeSection } from "../Home/HomeSection";
import { useEffect, useState } from "react";
import { SaleSection } from "../Sale/SaleSection";
import { TitleSection } from "../shared/TitleSection";
import { getDailyGain, getSales, loadDailySales } from "../../services/SalesService";

export function MainContent({ selectedCat }) {

    const [totalSaleOfTheDay, setTotalSaleOfTheDay] = useState(null);
    const [totalWeeklySale, setTotalWeeklySale] = useState(null);
    const [allSales, setAllSales] = useState([]);
    const [allWeeklySale, setAllWeeklySale] = useState([]);

    const sectionComponents = {
        'Home': <HomeSection />,
        'Ventas': <SaleSection
            totalSaleOfTheDay={totalSaleOfTheDay}
            setTotalSaleOfTheDay={setTotalSaleOfTheDay}
            totalWeeklySale={totalWeeklySale}
            setTotalWeeklySale={setTotalWeeklySale}
            setAllWeeklySale={setAllWeeklySale}
            setAllSales={setAllSales}
        />,
        'Control': <ControlSection totalSaleOfTheDay={totalSaleOfTheDay} />,
    };

    useEffect(() => {
        const fetchDailyGain = async () => {
            try {
                const gain = await getDailyGain();
                setTotalSaleOfTheDay(gain);
            } catch (error) {
                console.error('Error al obtener la ganancia diaria:', error);
            }
        };
        fetchDailyGain();
    }, []);

    return (
        <main className="lg:pl-24 grid grid-cols-1 xl:grid-cols-8 py-2 md:px-4 xl:pb-5 sm:h-[785px]">
            <TitleSection />
            {sectionComponents[selectedCat] || <HomeSection />}
            <HistorySection allSales={allSales} setAllSales={setAllSales} allWeeklySale={allWeeklySale} setAllWeeklySale={setAllWeeklySale} totalSaleOfTheDay={totalSaleOfTheDay} totalWeeklySale={totalWeeklySale} />
        </main>
    );
};