import { HistoryNav } from "./HistoryNav";

export function HistorySection () {

    return (
      <div className="xl:col-span-2 p-1 sm:px-4 lg:px-6 xl:static xl:p-0">
        <div className="md:bg-[#1F1D28] rounded-xl sm:p-2 h-full">
          {/* Orders */}
          <div className="sm:pt-8 text-gray-300 p-2 sm:p-6 xl:p-2">
            <h1 className="text-2xl mb-4">Historial de ventas</h1>
            {/* Pills */}
            <HistoryNav />
            {/* Card */}
            <div>
              {/* Product */}
              <div className="bg-[#262837] sm:p-4 rounded-xl">
                <h4 className="text-center text-xs pl-1 border p-1 rounded-2xl border-gray-500">23/03/24 20:55hs</h4>
                <div className="grid grid-cols-6 gap-2 p-2 text-slate-500">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <h5 className="text-sm">Lavandina</h5>
                  </div>
                  {/* Quantity */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span className="text-sm">$2600</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center gap-2 p-2 text-slate-500">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <h5 className="text-sm">Alf Tatin Tri</h5>
                  </div>
                  {/* Quantity */}
                  <div>
                    <span>1</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span className="text-sm">$700</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center gap-2 p-2 text-slate-500">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <h5 className="text-sm">Coca 2lt Ret</h5>
                  </div>
                  {/* Quantity */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span className="text-sm">$2800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};