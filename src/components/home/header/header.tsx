import React from "react";
import plantImage from "../../../assets/pngs/plant.png";
import { DrawerPanel } from "@/components/layout/drawer";

function Header() {
  return (
    <header className="bg-green-700 text-white shadow-lg">
      <div className=" p-4">
        {/* لوگو و نام سایت */}
        <div className="flex items-center justify-between p-10">
          <DrawerPanel />
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10" src={plantImage} alt="Plant Logo" />
            <span className="text-xl font-bold">پنل ادمین ارگانیک شاپ </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
