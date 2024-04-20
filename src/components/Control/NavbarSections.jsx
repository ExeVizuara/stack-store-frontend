import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export function NavbarSections({ category }) {

    const [currentCategory, setCurrentCategory] = useState('Almacen');

    const [activedCats, setActivedCats] =
        useState({
            Almacen: true,
            Libreria: false,
            Cigarrillos: false,
            Pollo: false
        });

    const handleClick = (option) => {
        setCurrentCategory(option);
        setActivedCats({
            Almacen: option === 'Almacen',
            Libreria: option === 'Libreria',
            Cigarrillos: option === 'Cigarrillos',
            Pollo: option === 'Pollo'
        });
        category = option;
        console.log(option);
    };

    const activatedLink = "relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#5c9c19d8] before:left-0 before:rounded-full before:-bottom-[1px] text-[#5c9c19d8]";

    {/* Tabs */ }
    return (
        <nav className="text-gray-300 flex items-center text-md justify-between md:justify-start md:gap-8 mb-6 px-4 xl:text-md">
            <BrowserRouter>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Almacen')}
                    className={`py-2 ${activedCats.Almacen ? activatedLink : ""}`}
                >
                    ALMACEN
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Libreria')}
                    className={`py-2 ${activedCats.Libreria ? activatedLink : ""}`}
                >
                    LIBRERIA
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Cigarrillos')}
                    className={`py-2 ${activedCats.Cigarrillos ? activatedLink : ""}`}
                >
                    CIGARRILLOS
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Pollo')}
                    className={`py-2 ${activedCats.Pollo ? activatedLink : ""}`}
                >
                    POLLO
                </NavLink>
            </BrowserRouter>
        </nav>
    );
};


