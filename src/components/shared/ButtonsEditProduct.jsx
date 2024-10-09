export const ButtonSave = () => {
    
    return (
        <button type="submit" className="bg-green-800 hover:bg-green-900 px-6 py-2 border border-[#5c9c19d8] text-white w-full rounded-md">
            GUARDAR
        </button>
    );
}

export const ButtonDelete = ({onClick}) => {
    return (
        <button type="button" onClick={onClick} className="hover:bg-red-800 px-6 py-2 border bg-red-500 border-red-800 hover:text-white w-full rounded-md">
            ELIMINAR PRODUCTO
        </button>
    );
};