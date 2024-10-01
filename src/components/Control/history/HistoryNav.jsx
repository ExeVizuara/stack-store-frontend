import { useState } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

export function HistoryNav({ totalSaleOfTheDay, totalWeeklySale }) {

    const [currentSection, setCurrentSection] = useState(false);

    const [activedCats, setActivedCats] =
        useState({
            Diario: true,
            Semanal: false,
            Anual: false
        });

    const handleClick = (option) => {
        setCurrentSection(option);
        setActivedCats({
            Diario: option === 'Diario',
            Semanal: option === 'Semanal',
            Anual: option === 'Anual'
        });
        console.log(option);
    };

    const activatedLink = "border border-[#5c9c19d8] bg-[#2c3e19d8] text-white";

    return (
        <BrowserRouter>
            <div className="grid grid-cols-3 text-center text-sm gap-1 xl:gap-2 flex-wrap mb-2">
                <NavLink
                    to="/"
                    onClick={() => handleClick('Diario')}
                    className={`text-[#5c9c19d8] py-2 px-1 xl:px-3 rounded-xl ${activedCats.Diario ? activatedLink : ""}`}
                >
                    <div className="flex flex-row justify-around">
                        <h3>Diario</h3>
                        <div className="bg-green-700 px-1 text-white">${totalSaleOfTheDay}</div>
                    </div>
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Semanal')}
                    className={`text-[#5c9c19d8] py-2 px-1 xl:px-3 rounded-xl ${activedCats.Semanal ? activatedLink : ""}`}
                >
                    <div className="flex flex-row justify-around">
                        <h3>Semanal</h3>
                        <div className="bg-green-700 px-1 text-white">${totalWeeklySale}</div>
                    </div>
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Anual')}
                    className={`text-[#5c9c19d8] py-2 px-1 xl:px-3 rounded-xl ${activedCats.Anual ? activatedLink : ""}`}
                >
                    Anual
                </NavLink>
            </div>
        </BrowserRouter>
    );
};