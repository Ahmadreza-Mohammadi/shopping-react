import { Button } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { SalesTable } from "./salesTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { SALES_URL } from "@/api/api";
import { Header } from "../home/header/header";

export default function Sales() {
  const [soldData, setSoldData] = useState([]);

  useEffect(() => {
    async function renderSoldProducts() {
      const res: any = await axios.get(SALES_URL);
      setSoldData(res.data);
    }

    renderSoldProducts();
  }, []);
  return (
    <>
      <div className="h-screen w-full bg-white">
        <Header />
        <div className="flex justify-center items-center h-screen bg-white">
          <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl w-[750px] h-[500px] bg-white p-6">
            <div className="flex flex-row gap-8 items-center">
              <div className="flex items-center border-4 border-green-800 rounded-md overflow-hidden shadow-lg bg-gray-700">
                <Button colorPalette="green" size="md" className="rounded-none">
                  سرچ کنید
                </Button>
                <input
                  type="text"
                  placeholder="سرچ کنید..."
                  className="w-full h-10  outline-none border-none"
                />
                <IoSearch className="w-7 h-7" />
              </div>
            </div>

            <div className="border-4 border-green-500 overflow-y-auto h-72  custom-scrollbar">
              <SalesTable soldData={soldData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
