export function SellItem({ name, price, quantity }) {
    return (
        <ul className="flex flex-row justify-between">
            <li className="w-1/3"><h5>{name}</h5></li>
            <li className=""><h5>{quantity}</h5></li>
            <li className=""><span>${ price }</span></li>
        </ul>
    );
};