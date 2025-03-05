import { For, Stack, Table } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

export const Tabel = ({ products,onDelete  }) => {
  return (
    <Stack gap="10">
      <Table.Root>
        <Table.Header className="sticky top-0 bg-white z-10 shadow-md">
          <Table.Row background={"white"}>
            <Table.ColumnHeader color={"black"}>آیدی</Table.ColumnHeader>
            <Table.ColumnHeader color={"black"}>تاریخ</Table.ColumnHeader>
            <Table.ColumnHeader color={"black"}>محصولات</Table.ColumnHeader>
            <Table.ColumnHeader color={"black"}>قیمت</Table.ColumnHeader>
            <Table.ColumnHeader color={"black"}>وضعیت</Table.ColumnHeader>
            <Table.ColumnHeader color={"black"}>فروش</Table.ColumnHeader>
            <Table.ColumnHeader color={"black"}>تغییرات</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.length > 0 ? (
            products.map((item) => (
              <Table.Row key={item.id} background={"white"}>
                <Table.Cell color={"black"}>{item.id}</Table.Cell>
                <Table.Cell color={"black"}>{item.date}</Table.Cell>
                <Table.Cell color={"black"}>{item.name}</Table.Cell>
                <Table.Cell color={"black"}>{item.price}</Table.Cell>
                <Table.Cell color={"black"}>{item.status}</Table.Cell>
                <Table.Cell color={"black"}>{item.sales}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <button>
                      <FiEdit3 className="text-red-400 cursor-pointer" />
                    </button>
                    <button>
                      <RiDeleteBinFill onClick={() => onDelete(item.id)} className="text-blue-300 cursor-pointer" />
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={7} className="text-center">
                محصولی یافت نشد
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Stack>
  );}