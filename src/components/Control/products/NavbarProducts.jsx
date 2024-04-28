import { BrowserRouter, NavLink } from "react-router-dom";
import { useState } from "react";

export function NavbarProducts({ onCategoryChange }) {

    const [activedCats, setActivedCats] =
    useState({
      List: true,
      Upload: false,
      Update: false
    });

    const handleClick = (option) => {
        setActivedCats({
          List: option === 'List',
          Upload: option === 'Upload',
          Update: option === 'Update'
        });
        onCategoryChange(option);
      };

    const activatedLink = "border border-[#5c9c19d8] bg-[#2c3e19d8]";

    return (
        <nav className="text-gray-300 flex flex-row items-center justify-center w-auto md:gap-2 mb-2 text-xl p-auto md:text-xl sm:text-lg lg:text-2xl productsnav">
            <BrowserRouter>
                <NavLink
                    to="/"
                    onClick={() => handleClick('List')}
                    className={`text-gray-300 rounded-lg p-2 px-2 w-full sm:px-12 md:px-16 xl:py-4 ${activedCats.List ? activatedLink : "bg-[#262837]"}`}
                >
                    Productos
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Upload')}
                    className={`text-gray-300 rounded-lg p-2 px-2 w-full sm:px-12 md:px-16 xl:py-4 ${activedCats.Upload ? activatedLink : "bg-[#262837]"}`}
                >
                    Agregar
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleClick('Update')}
                    className={`text-gray-300 rounded-lg p-2 px-2 w-full sm:px-12 md:px-16 xl:py-4 ${activedCats.Update ? activatedLink : "bg-[#262837]"}`}
                >
                    Modificar
                </NavLink>
            </BrowserRouter>
        </nav>
    )
}