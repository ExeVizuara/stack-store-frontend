import { AlmacenSection } from "./products/AlmacenSection";
import { NavbarSections } from "./NavbarSections";
import { TitleSection } from "../shared/TitleSection";
import { LibreriaSection } from "./products/Libreria/AlmacenSection";
import { useState } from "react";

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
            {currentCategory === 'Almacen' && <AlmacenSection />}
            {currentCategory === 'Libreria' && <LibreriaSection />}
        </div>
    );
};