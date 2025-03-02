import { For, Stack, Table } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

export const Tabel = () => {
  return (
    <Stack gap="10">
      <>
        <Table.Root>
          <Table.Header className="sticky top-0 bg-white z-10 shadow-md">
            <Table.Row>
              <Table.ColumnHeader>آیدی</Table.ColumnHeader>
              <Table.ColumnHeader>تاریخ</Table.ColumnHeader>
              <Table.ColumnHeader>محصولات</Table.ColumnHeader>
              <Table.ColumnHeader>قیمت</Table.ColumnHeader>
              <Table.ColumnHeader>وضعیت</Table.ColumnHeader>
              <Table.ColumnHeader>فروش</Table.ColumnHeader>
              <Table.ColumnHeader>تغییرات</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
                <Table.Cell>{item.sales}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <button>
                      <FiEdit3 className="text-red-400 cursor-pointer" />
                    </button>
                    <button>
                      <RiDeleteBinFill className="text-blue-300 cursor-pointer" />
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </>
    </Stack>
  );
};
const items = [
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 2,
    date: "1403/12/8",
    name: "سیب",
    price: "42تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 3,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 4,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 5,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 6,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 7,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 8,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 9,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 10,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 11,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 12,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 13,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 14,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 15,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 16,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 17,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
];


