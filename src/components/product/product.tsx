import { Button } from "@chakra-ui/react";
import { Tabel } from "./productTabele";
import { IoSearch } from "react-icons/io5";

import { FaCirclePlus } from "react-icons/fa6";


  export default function Products() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-lg w-[750px] h-[500px] bg-white p-6">
          
          
          <div className="flex flex-row gap-8 items-center">
            <FaCirclePlus className="text-green-500 w-10 h-10" />
            <div className="flex items-center border-4 border-green-800 rounded-md overflow-hidden shadow-lg">
              <Button colorPalette="green" size="md" className="rounded-none">
                سرچ کنید
              </Button>
              <input type="text" placeholder="سرچ کنید..." className="w-full h-10 px-4 outline-none border-none" />
              <IoSearch className="w-7 h-7" />
            </div>
          </div>
  
          <div className="border-4 border-green-500 overflow-y-auto h-72  custom-scrollbar">
            <Tabel />
          </div>
  
        </div>
      </div>
    );
  }
  