import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { ProductList } from "./ProductList";
import { UploadProduct } from "./UploadProduct";
import { Messages } from "./Messages";


export function NavbarProducts() {

    const [currentCategory, setCurrentCategory] = useState('List');

    const [activedCats, setActivedCats] =
    useState({
      List: true,
      Upload: false,
      Messages: false
    });

    const handleClick = (option) => {
        setCurrentCategory(option);
        setActivedCats({
          List: option === 'List',
          Upload: option === 'Upload',
          Messages: option === 'Messages'
        });
        console.log(option);
      };

      const activatedLink = "border border-[#5c9c19d8] bg-[#2c3e19d8]";
    

    {/* Content */ }
    return (
        <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-[570px]">
            <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-12 xl:pt-10 rounded-xl items-center text-center text-gray-300 col-span-3">
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
                    onClick={() => handleClick('Messages')}
                    className={`text-gray-300 rounded-lg p-2 px-2 w-full sm:px-12 md:px-16 xl:py-4 ${activedCats.Messages ? activatedLink : "bg-[#262837]"}`}
                  >
                    Mensajes
                  </NavLink>
                </BrowserRouter>
              </nav>
              {currentCategory === 'List' && <ProductList />}
              {currentCategory === 'Upload' && <UploadProduct />}
              {currentCategory === 'Messages' && <Messages />}
            </div>
        </div>
    );
};
