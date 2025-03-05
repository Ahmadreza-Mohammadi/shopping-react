import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
// import Header from "../home/header/header";

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: string;
}

const StoreProuduct: Item[] = [
  {
    id: 1,
    name: "سیب",
    quantity: 50,
    price: "48 تومان",
  },
  { 
    id: 2,
    name: "موز",
    quantity: 30,
    price: "42 تومان",
  },
  { 
    id: 2,
    name: "هلو",
    quantity: 30,
    price: "50 تومان",
  },
  { 
    id: 2,
    name: "شلیل",
    quantity: 30,
    price: "45 تومان",
  },
];

const InventoryTable: React.FC = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("inventoryItems");
    return storedItems ? JSON.parse(storedItems) : StoreProuduct;
  });
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [modalType, setModalType] = useState<"add" | "remove" | null>(null);
  const [inputValue, setInputValue] = useState<number>(0);
  const updateItemsInLocalStorage = (updatedItems: Item[]) => {
    setItems(updatedItems);
    localStorage.setItem("inventoryItems", JSON.stringify(updatedItems));
  };
  const changeQuantity = (id: number, delta: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    );
    updateItemsInLocalStorage(updatedItems);
  };
  const handleModalSubmit = () => {
    if (selectedItem && inputValue) {
      changeQuantity(
        selectedItem.id,
        modalType === "add" ? inputValue : -inputValue
      );
      closeModal();
    }
  };
  const openModal = (item: Item, type: "add" | "remove") => {
    setSelectedItem(item);
    setModalType(type);
    setInputValue(0);
  };
  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };
  return (
    <div>
      
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl w-[750px] h-[500px] bg-white p-6">
          <div className="flex flex-row gap-8 items-center">
            <FaCirclePlus className="text-green-500 w-10 h-10" />
            <div className="flex items-center border-4 border-green-800 rounded-md overflow-hidden shadow-lg">
              <button className="bg-green-500 text-white px-4 py-2 rounded-none">
                سرچ کنید
              </button>
              <input
                type="text"
                placeholder="سرچ کنید..."
                className="w-full h-10 px-4 outline-none border-none text-black"
              />
              <IoSearch className="w-7 h-7 text-black" />
            </div>
          </div>
          <div className="border-4 border-green-500 overflow-y-auto h-72 custom-scrollbar w-full flex justify-center">
            <div className="max-h-80 border border-gray-300 rounded-md shadow-lg w-4/5">
              <table className="table-auto w-full text-black text-center">
                <thead className="sticky top-0 bg-white z-10 shadow-md">
                  <tr>
                    <th>آیدی</th>
                    <th>نام</th>
                    <th>مقدار</th>
                    <th>قیمت</th>
                    <th>عمل</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>
                        <div className="flex gap-2 justify-center">
                          <button onClick={() => openModal(item, "add")} className="bg-green-500 text-white px-2 py-1 rounded border border-green-700" >
                            اضافه کردن
                          </button>
                          <button onClick={() => openModal(item, "remove")} className="bg-red-500 text-white px-2 py-1 rounded border border-red-700" >
                            حذف کردن
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedItem && modalType && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="absolute inset-0 backdrop-blur-sm bg-opacity-50"></div>
          <div className="relative z-30 bg-white p-16 rounded-lg shadow-lg w-[80%] max-w-[600px]">
            <h2 className="mb-4 text-lg font-bold">
              {modalType === "add" ? "اضافه کردن" : "حذف کردن"} مقدار
            </h2>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} className="border p-2 mb-4 w-full" />
            <div className="flex justify-end gap-2">
              <button onClick={handleModalSubmit} className="bg-green-500 text-white px-4 py-2 rounded border border-green-700" >
                تایید
              </button>
              <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded border border-gray-700">
                لغو
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default InventoryTable;