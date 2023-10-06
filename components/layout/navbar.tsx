"use client";
import { Image } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div className="w-full flex text-slate-800 justify-center items-center fixed py-4 bg-white">
      <div className="container flex justify-between items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/2560px-Behance_logo.svg.png"
          className="h-10 rounded-none"
          alt=""
        />
        <div className="flex gap-4">
          <button className="px-4 py-1 bg-stone-700 rounded-lg shadow-lg text-white font-bold">
            Hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
