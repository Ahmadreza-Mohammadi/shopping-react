import { getFromLocalStorage } from "@/utils/utils";
import { Stack, Table } from "@chakra-ui/react";

export const SalesTable = ({soldData}) => {


  return (
    <Stack gap="10">
      <div className="max-h-80  border border-gray-300 rounded-md shadow-lg">
        <Table.Root>
          <Table.Header className="sticky top-0 bg-white z-10 shadow-2xl">
            <Table.Row background={"white"}>
              <Table.ColumnHeader color={"black"}>آیدی</Table.ColumnHeader>
              <Table.ColumnHeader color={"black"}>نام محصول</Table.ColumnHeader>
              <Table.ColumnHeader color={"black"}>تعداد فروخته شده</Table.ColumnHeader>
              <Table.ColumnHeader color={"black"}>قیمت</Table.ColumnHeader>
              <Table.ColumnHeader color={"black"}>وضعیت سفارش</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body >
            {soldData.map((item: any) =>  (
              <Table.Row background={"white"} color={"black"} key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.soldCount}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>
                  {item.delivered ? "تحویل داده شده" : "در حال آماده سازی"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Stack>
  );
};
