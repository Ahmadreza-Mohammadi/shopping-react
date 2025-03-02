import { Button } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { SalesTable } from "./salesTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { header, SALES_URL } from "@/api/api";
import { getFromLocalStorage, setInLocalStorage } from "@/utils/utils";
import Header from "../home/header/header";

export default function Sales() {
  const [soldData, setSoldData] = useState([]);
  // async function x(body) {
  //   const res = await axios.post(SALES_URL, body, {headers: header})
  //   return res.data
  // }

  useEffect(() => {
    async function renderSoldProducts() {
      const res: any = await axios.get(SALES_URL);
      // setInLocalStorage("soldProducts", res.data);
      setSoldData(res.data);
      // console.log(soldData);
    }

    renderSoldProducts();
  }, []);
  return (
    <>
      <div className="h-screen w-full bg-white">
        <Header />
        <div className="flex justify-center items-center h-screen">
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
              <SalesTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
