import { Header } from "../home/header/header";
import InventoryTable from "./inventorytable";
export default function Inventory() {
  return (
     <div className="w-full h-screen bg-white text-black relative">
        <Header />
       <InventoryTable/>
     </div>
   
  );
}