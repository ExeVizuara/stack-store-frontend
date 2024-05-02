export function HistoryItem({ product_name, price }) {

    return (
        <div className="grid grid-cols-6 gap-2 p-2 text-slate-500">
            {/* Product description */}
            <div className="col-span-4 flex items-center gap-3">
                <h5 className="text-sm">{product_name}</h5>
            </div>
            {/* Quantity */}
            <div>
                <span>1</span>
            </div>
            {/* Price */}
            <div>
                <span className="text-sm">{price}</span>
            </div>
        </div>
    );
};