import { RiSearch2Line } from "react-icons/ri";
import { Clock } from "./Clock";

export function TitleSection() {

    return (
        <div className="flex flex-row justify-between md:items-center gap-4 pl-4">
            <div>
                <h1 className="text-2xl text-gray-300">StackStore v1.0</h1>
                <Clock />
            </div>
            <form>
                <div className="w-full relative">
                    <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="text" className="bg-[#1F1D2B] w-10 py-2 p-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Usuario" />
                </div>
            </form>
        </div>
    )
}