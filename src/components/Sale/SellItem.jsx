export function SellItem({ name, price, quantity, category }) {
    return (
        <ul className="flex flex-row justify-between">
            <li className="w-1/3"><h5>{name}</h5></li>
            { category === 'PorKG' ?
                <li className=""><h5>{quantity} Grs</h5></li>
                :
                <li className=""><h5>{quantity}</h5></li>
            }
            <li className=""><span>${ price }</span></li>
        </ul>
    );
};