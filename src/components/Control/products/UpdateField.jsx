import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function UpdateField({ title, name, value, handleChange, expiration, setExpiration }) {

    return (
        <li className="flex flex-col">
            <label className="text-start sm:p-1">{title} </label>
            {title === 'Vencimiento:' ?
                (<DatePicker
                    className="sm:w-full rounded-md bg-gray-200 p-1"
                    selected={value}
                    showIcon
                    isClearable
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        if (!date) { setExpiration("") }
                        else {
                            const formattedDate = date.toISOString().split('T')[0];
                            setExpiration(formattedDate);
                        }
                        console.log(expiration);
                    }
                } />)
            :
                (<input
                    type="text"
                    name={name}
                    value={value}
                    required className="sm:w-full rounded-md bg-gray-200 p-1"
                    onChange={handleChange}
                />)
            }
        </li>
    )
};