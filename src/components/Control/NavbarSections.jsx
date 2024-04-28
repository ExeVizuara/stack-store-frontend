import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export function NavbarSections({ currentPage }) {

    const [currentCategory, setCurrentCategory] = useState('Almacen');

    const [activedCats, setActivedCats] =
        useState({
            Almacen: true,
            Golosinas: false,
            Bebidas: false,
            Libreria: false,
            Cigarrillos: false,
            Congelados: false
        });

    const handleClick = (option) => {
        setCurrentCategory(option);
        setActivedCats({
            Almacen: option === 'Almacen',
            Golosinas: option === 'Golosinas',
            Bebidas: option === 'Bebidas',
            Libreria: option === 'Libreria',
            Cigarrillos: option === 'Cigarrillos',
            Congelados: option === 'Congelados'
        });
        console.log(option);
        currentPage(option);
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
                    onClick={() => handleClick('Golosinas')}
                    className={`py-2 ${activedCats.Golosinas ? activatedLink : ""}`}
                >
                    GOLOSINAS
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Bebidas')}
                    className={`py-2 ${activedCats.Bebidas ? activatedLink : ""}`}
                >
                    BEBIDAS
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
                    onClick={() => handleClick('Congelados')}
                    className={`py-2 ${activedCats.Congelados ? activatedLink : ""}`}
                >
                    CONGELADOS
                </NavLink>
            </BrowserRouter>
        </nav>
    );
};


