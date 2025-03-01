import { For, Stack, Table } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

export const Tabel = () => {
  return (
    <Stack gap="10">
      <div className="max-h-80  border border-gray-300 rounded-md shadow-lg">
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
      </div>
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
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "42تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
  {
    id: 1,
    date: "1403/12/8",
    name: "سیب",
    price: "48تومان",
    status: "اتمام موجودی",
    sales: "10%",
  },
];

{
  /* <table className="w-full text-center ">
  <thead className="border-8 b">
    <tr>
      <th>آیدی</th>
      <th>تاریخ</th>
      <th>محصولات</th>
      <th>قیمت</th>
      <th>وضعیت</th>
      <th> فروش</th>
      <th></th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>#65SFT1</td>
    <td>1403/05/12</td>
    <td>سیب</td>
    <td>48تومان</td>
    <td>فروخته شد</td>
    <td>10%</td>
    <td></td>
  </tr>
</tbody>
</table> */
}
