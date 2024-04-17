export function SellItem({ name, price }) {
    return (
        <ul className="grid grid-cols-8">
            <li className="col-span-6"><h5>{name}</h5></li>
            <li className=""><span>${ price }</span></li>
        </ul>
    );
};