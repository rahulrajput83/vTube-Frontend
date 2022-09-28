import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Input from "./Input";
import SignButt from "./SignButt";
import { Link } from "react-router-dom";




function Navbar() {
  // mobile, sm,md,lg,xl
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full z-10 p-3 bg-[rgb(1, 1, 2)]">
      <div className="max-w-[1250px] mx-auto flex justify-between items-center">
        <Link to='/' className="text-white font-bold text-xl w-fit cursor-pointer">
          vTube
        </Link>
        <div className="hidden text-md gap-4 w-11/12 justify-end sm:flex md:gap-8">
          <Input />
          <SignButt setCollapsed={setCollapsed} collapsed={collapsed} />
        </div>
        {collapsed ? (
          <IoCloseSharp
            onClick={() => setCollapsed(!collapsed)}
            size={25}
            className="block sm:hidden text-white cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt1
            onClick={() => setCollapsed(!collapsed)}
            size={25}
            className="block sm:hidden text-white cursor-pointer"
          />
        )}
      </div>

      <div
        className={
          collapsed
            ? `sm:hidden bg-[#010102] absolute top-0 z-10 left-0 w-10/12 h-full shadow-md pt-8 flex flex-col justify-start items-center capitalize duration-500 ease-out}`
            : `hidden left-[-100%] duration-500 ease-out`
        }
      >
        <Link to='/' className="text-white mb-5 w-fit cursor-pointer">
          vTube
        </Link>
        <Input />
        <SignButt setCollapsed={setCollapsed} collapsed={collapsed} />
      </div>
    </div>
  );
}


export default Navbar