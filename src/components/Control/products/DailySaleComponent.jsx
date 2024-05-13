import { useState, useEffect } from 'react';

export function DailySaleComponent({ totalSaleOfTheDay, currentPage }) {
    
    
    return (
        <div>
            <ul className='flex flex-row justify-between w-full p-2 mb-2 gap-2 text-[12px] sm:text-lg'>
                <li className='border border-red-800 px-2 py-1'>
                    Total venta: ${totalSaleOfTheDay}
                </li>
                <li className='border border-[#5c9c19d8] px-2 py-1'>
                    {currentPage}: $12000
                </li>
                <li className='border border-[#efeb24d8] px-2 py-1'>
                    Gastos: $2000
                </li>
                <li className='border border-[#2160c0d8] px-2 py-1'>
                    Compras: $5000
                </li>
            </ul>
        </div>
    );
};