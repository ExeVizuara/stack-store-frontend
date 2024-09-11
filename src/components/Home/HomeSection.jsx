import { TitleSection } from "../shared/TitleSection";
import MonthlyChart from "./MonthlyChart";
import { SalesChart } from "./SalesChart";
import { HomeTitles } from "./HomeTitles";
import { ProductSalesChart } from "./ProductSalesChart";
import { Annotations } from "./Annotations";
import { SystemMessages } from "./SystemMessages";

export function HomeSection({ searchProducts, setSearchProducts, search, setSearch }) {

    const salesData = [
        { label: 'Lunes', value: 21000 },
        { label: 'Martes', value: 35000 },
        { label: 'Miércoles', value: 15000 },
        { label: 'Jueves', value: 13500 },
        { label: 'Viernes', value: 25000 },
        { label: 'Sabado', value: 33000 },
        { label: 'Domingo', value: 21000 }
    ];

    const monthlyData = [
        { label: 'Enero', value: 21000 },
        { label: 'Febrero', value: 35000 },
        { label: 'Marzo', value: 15000 },
        { label: 'Abril', value: 13500 },
        { label: 'Mayo', value: 25000 },
        { label: 'Junio', value: 33000 },
        { label: 'Julio', value: 21000 },
        { label: 'Agosto', value: 21000 },
        { label: 'Septiembre', value: 21000 },
        { label: 'Octubre', value: 21000 },
        { label: 'Noviembre', value: 21000 },
        { label: 'Diciembre', value: 21000 }
    ];

    const productSalesData = [
        { product: 'Almacén', sales: 100 },
        { product: 'Librería', sales: 80 },
        { product: 'Cigarrillos', sales: 120 },
        { product: 'Pollo', sales: 120 }
    ];

    return (
        <div className="xl:col-span-6 sm:p-2 lg:p-4 xl:p-2">
            <div className="grid grid-cols-1 md:grid-cols-8 lg:gap-6 sm:gap-4">
                <div className="col-span-8">
                    <HomeTitles title="MENSAJES DEL SISTEMA"/>
                </div>
                <div className="col-span-8 sm:bg-[#1F1D2B] min-h-[350px] h-auto rounded-md md:p-8 2xl:px-2">
                    <div className="w-10/12 md:w-11/12 items-center gap-2 lg:gap-4 rounded-lg h-[270px] mx-auto">
                        <SystemMessages />
                    </div>
                </div>
                <div className="col-span-8">
                    <HomeTitles title="REGISTRO DE GANANCIAS"/>
                </div>
                <div className="col-span-8 p-4 lg:p-0 md:col-span-4">
                    <MonthlyChart data={monthlyData} />
                </div>
                <div className="col-span-8 p-4 lg:p-0 md:col-span-4">
                    <SalesChart data={salesData} />
                </div>
                <div className="col-span-8 md:col-span-4 sm:bg-[#1F1D2B] min-h-[350px] h-auto rounded-md sm:px-8">
                    <h1 className="text-center text-gray-500 my-2">ANOTACIONES</h1>
                    <div className="w-full md:w-11/12 items-center p-4 md:p-0 gap-2 lg:gap-4 rounded-lg h-[270px] mx-auto">
                        <Annotations />
                    </div>
                </div>
                <div className="col-span-8 md:col-span-4 md:bg-[#1F1D2B] min-h-[350px] rounded-md py-2 px-6">
                    <h1 className="text-center text-gray-500">PRODUCTOS MAS VENDIDOS</h1>
                    <ProductSalesChart data={productSalesData} />
                </div>
            </div>
        </div>
    );
};