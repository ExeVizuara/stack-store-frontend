import { useState } from "react";
import { NavbarSections } from "./NavbarSections";
import { TitleSection } from "../shared/TitleSection";
import { AlmacenSection } from "./products/Almacen/AlmacenSection";

export function ControlSection() {

    const [currentCategory, setCurrentCategory] = useState('Almacen');

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    return (
        <div className="xl:col-span-6 sm:p-2 p-1 lg:p-4 xl:h-screen">
            {/* Header */}
            <header>
                {/* Title */}
                <TitleSection />
                <NavbarSections currentPage={handleCategoryChange} />
            </header>
            <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-[570px]">
                <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-12 xl:pt-10 rounded-xl items-center text-center text-gray-300 col-span-3">
                    <AlmacenSection cat={currentCategory}/>
                </div>
            </div>
        </div>
    );
};