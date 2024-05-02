import { useState, useEffect } from "react";
import { loadSales } from "../../shared/SalesService";
import { HistoryNav } from "./HistoryNav";
import { HistoryItem } from "./HistoryItem";

export function HistorySection() {

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  const [salesList, setSalesList] = useState([]);

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    try {
      const allSales = await loadSales();
      DailySale(allSales);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const DailySale = async (sales) => {

    const results = sales.filter((data) => data.createdAt.includes(formattedDate));
    if (!results) {
      console.log("NO HAY VENTAS HOY")
      setSalesList([]);
    } else {
      setSalesList(results)
      console.log(results);
    }
  };

  return (
    <div className="xl:col-span-2 p-1 sm:px-4 lg:px-6 xl:static xl:p-0">
      <div className="md:bg-[#1F1D28] rounded-xl sm:p-2 xl:p-2 h-full">
        {/* Orders */}
        <div className="sm:pt-8 text-gray-300 p-2 sm:p-6 xl:p-2">
          <h1 className="text-xl mb-4">Historial de ventas</h1>
          {/* Pills */}
          <HistoryNav />
          {/* Card */}
          <div>
            {/* Product */}
            <div className="bg-[#262837] sm:p-4 rounded-xl overflow-y-auto overflow-x-auto">
              <h4 className="text-center text-xs pl-1 border p-1 rounded-2xl border-gray-500">{formattedDate}</h4>
              {salesList.map((sale) => (
                <HistoryItem key={sale.id} product_name={sale.product_name} price={sale.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};