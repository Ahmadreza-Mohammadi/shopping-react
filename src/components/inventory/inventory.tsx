import InventoryTable from "./inventorytable";
import Header from "../home/header/header";
export default function Inventory() {
  return (
     <div className="w-full h-screen bg-white text-black relative">
        <Header />
       <InventoryTable/>
     </div>
   
  );
}