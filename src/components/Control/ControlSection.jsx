import { NavbarProducts } from "./products/NavbarProducts";
import { NavbarSections } from "./NavbarSections";
import { TitleSection } from "../shared/TitleSection";

export function ControlSection() {


    return (
        <div className="xl:col-span-6 sm:p-2 p-1 lg:p-4 xl:h-screen">
            {/* Header */}
            <header>
                {/* Title and search */}
                <TitleSection />
                <NavbarSections />
            </header>
            <NavbarProducts />
        </div>
    );
};