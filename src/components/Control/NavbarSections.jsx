import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export function NavbarSections({ currentPage }) {

    const [currentCategory, setCurrentCategory] = useState('Almacen');
    const [menuOpen, setMenuOpen] = useState(false);

    const [activedCats, setActivedCats] =
        useState({
            Almacen: true,
            Golosinas: false,
            Bebidas: false,
            Libreria: false,
            Cigarrillos: false,
            Congelados: false,
            PorKG: false
        });

    const handleClick = (option) => {
        setCurrentCategory(option);
        setActivedCats({
            Almacen: option === 'Almacen',
            Golosinas: option === 'Golosinas',
            Bebidas: option === 'Bebidas',
            Libreria: option === 'Libreria',
            Cigarrillos: option === 'Cigarrillos',
            Congelados: option === 'Congelados',
            PorKG: option === 'PorKG'
        });
        console.log(option);
        currentPage(option);
        setMenuOpen(false);
    };

    const activatedLink = "relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#5c9c19d8] before:left-0 before:rounded-full before:-bottom-[1px] text-[#5c9c19d8]";

    {/* Tabs */ }
    return (
        <div className="mt-4 menu-container flex flex-col items-center md:flex-row md:items-center text-md justify-between md:justify-start md:gap-8 mb-2 px-4 xl:text-md">
            <button className="w-full rounded-md p-2 bg-[#1F1D2B] block md:hidden" onClick={() => setMenuOpen(!menuOpen)}><h1 className="text-white">SELECCIONAR CATEGORIA</h1></button>
            <nav className={`text-gray-300 ${menuOpen ? 'block' : 'hidden'} md:flex flex flex-col md:flex-row md:items-center text-md justify-between md:justify-start md:gap-8 mb-6 xl:text-md`}>
                <BrowserRouter>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('Almacen')}
                        className={`md:py-2 ${activedCats.Almacen ? activatedLink : ""}`}
                    >
                        ALMACEN
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('Golosinas')}
                        className={`md:py-2 ${activedCats.Golosinas ? activatedLink : ""}`}
                    >
                        GOLOSINAS
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('Bebidas')}
                        className={`md:py-2 ${activedCats.Bebidas ? activatedLink : ""}`}
                    >
                        BEBIDAS
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('Libreria')}
                        className={`md:py-2 ${activedCats.Libreria ? activatedLink : ""}`}
                    >
                        LIBRERIA
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('Cigarrillos')}
                        className={`md:py-2 ${activedCats.Cigarrillos ? activatedLink : ""}`}
                    >
                        CIGARRILLOS
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('Congelados')}
                        className={`md:py-2 ${activedCats.Congelados ? activatedLink : ""}`}
                    >
                        CONGELADOS
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => handleClick('PorKG')}
                        className={`md:py-2 ${activedCats.PorKG ? activatedLink : ""}`}
                    >
                        POR KG
                    </NavLink>
                </BrowserRouter>
            </nav>
        </div>
    );
};


