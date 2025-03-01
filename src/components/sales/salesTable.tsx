import { getFromLocalStorage } from "@/utils/utils";
import { Stack, Table } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

export const SalesTable = () => {
  const data = getFromLocalStorage("soldProducts");
  console.log(data);

  return (
    <Stack gap="10">
      <div className="max-h-80  border border-gray-300 rounded-md shadow-lg">
        <Table.Root>
          <Table.Header className="sticky top-0 bg-white z-10 shadow-md">
            <Table.Row>
              <Table.ColumnHeader>آیدی</Table.ColumnHeader>
              <Table.ColumnHeader>نام محصول</Table.ColumnHeader>
              <Table.ColumnHeader>تعداد فروخته شده</Table.ColumnHeader>
              <Table.ColumnHeader>قیمت</Table.ColumnHeader>
              <Table.ColumnHeader>وضعیت سفارش</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.soldCount}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.delivered ? "تحویل داده شده" : "در حال آماده سازی"}</Table.Cell>
               
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Stack>
  );
};
