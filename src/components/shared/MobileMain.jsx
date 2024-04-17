import {
  RiUser3Line,
  RiMenu3Fill,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine
} from "react-icons/ri";


export function MobileMain({ onItemClick , showMenu }) {

  return (
    <>
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={onItemClick} className="p-2 text-white">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </>
  );
};