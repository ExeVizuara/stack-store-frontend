import { useState, useEffect } from "react";
import { HistoryNav } from "./HistoryNav";
import { HistoryItem } from "./HistoryItem";
import { currentTime } from "../../shared/Clock";
import { generateClient } from "aws-amplify/api";
import * as subscriptions from "../../../graphql/subscriptions";

export function HistorySection({ allSales }) {

  const [salesList, setSalesList] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const date = currentTime();
    setCurrentDateTime(date);
    getSales();
  }, []);

  useEffect(() => {
    const API = generateClient();
    const subscription = API.graphql({ query: subscriptions.onCreateSales })
      .subscribe({
        next: ({ data }) => {
          const newSale = data.value.data.onCreateSales;
          setSalesList([...salesList, newSale]);
          console.log(data)
        },
        error: (error) => console.warn(error)
      });

    return () => subscription.unsubscribe();
  }, [salesList]);

  const getSales = async () => {
    try {
      const sales = await allSales;
      dailySale(sales);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const dailySale = async (sales) => {

    const results = sales.filter((data) => data.createdAt.includes(currentDateTime));
    if (!results) {
      console.log("NO HAY VENTAS HOY")
      setSalesList([]);
    } else {
      const sortedSales = results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setSalesList(sortedSales)
      console.log(sortedSales);
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
              <h4 className="text-center text-xs pl-1 border p-1 rounded-2xl border-gray-500">{currentDateTime}</h4>
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