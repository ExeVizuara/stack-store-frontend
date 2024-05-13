import { useState, useEffect } from "react";
import { HistoryNav } from "./HistoryNav";
import { HistoryItem } from "./HistoryItem";
import { currentTime } from "../../shared/Clock";
import { loadDailySales } from "../../shared/SalesService";

export function HistorySection({ allSales, setAllSales }) {

  const currentDateTime = currentTime();
  
  const getSales = async () => {
    try {
      const sales = await loadDailySales(currentDateTime);
      if (!sales) {
        console.log("NO HAY VENTAS HOY")
        setAllSales([]);
      } else {
        const sortedSales = await sales.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setAllSales(sortedSales);
        console.log(sortedSales);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  
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
              <h4 className="text-center text-xs pl-1 border p-1 rounded-2xl border-gray-500">{currentDateTime}</h4>
              {allSales.map((sale) => (
                <HistoryItem key={sale.id} product_name={sale.product_name} price={sale.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};