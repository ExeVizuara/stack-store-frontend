import { RiHome6Line } from "react-icons/ri";

export function ButtonSidebar() {


    return (
        <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
            <div class="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
                Hover me
            </div>
            <div class="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
                Hover me
            </div>
            </button>
    );
};