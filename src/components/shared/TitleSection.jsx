import { RiSearch2Line } from "react-icons/ri";
import { Clock } from "./Clock";
import { useState, useRef } from "react";
import { ProductList } from "../Control/products/ProductList";

export function TitleSection() {

    return (

        <div className="flex flex-col sm:flex-row w-1/2 justify-between">
            <h1 className="text-2xl text-gray-300">StackStore v1.1</h1>
            <Clock />
        </div>
    )
}