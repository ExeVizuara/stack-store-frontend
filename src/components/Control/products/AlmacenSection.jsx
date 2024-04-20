import { useState } from "react";
import { NavBarProducts } from "./NavBarProducts";
import { ProductList } from "./ProductList";
import { UploadProduct } from "./UploadProduct";
import { Messages } from "./Messages";


export function AlmacenSection() {

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
    

    {/* Content */ }
    return (
        <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-[570px]">
            <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-12 xl:pt-10 rounded-xl items-center text-center text-gray-300 col-span-3">
              <NavBarProducts activedCats={ activedCats } conClick={ handleClick } />
              {currentCategory === 'List' && <ProductList />}
              {currentCategory === 'Upload' && <UploadProduct />}
              {currentCategory === 'Messages' && <Messages />}
            </div>
        </div>
    );
};
