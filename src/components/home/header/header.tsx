
import plantImage from "../../../assets/pngs/plant.png";
import { DrawerPanel } from "@/components/layout/drawer";

function Header() {
  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="h-24 flex justify-around items-center ">
        <DrawerPanel />
        <div className="flex gap-2 items-center">
          <img className="w-10 h-10" src={plantImage} alt="Plant Logo" />
          <span className="text-xl font-bold">پنل ادمین ارگانیک شاپ </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
