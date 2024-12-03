export function HistoryItem({ product_name, price, quantity }) {

    return (
        <div className="grid grid-cols-6 gap-2 p-2 text-slate-500">
            <div className="col-span-3 flex items-center gap-3">
                <h5 className="text-sm">{product_name}</h5>
            </div>
            <div className="col-span-2">
                <span>{quantity > 10 ? `${quantity} Grs` : quantity}</span>
            </div>
            <div className="col-span-1 text-sm">
                <span>{price}</span>
            </div>
        </div>
    );
};