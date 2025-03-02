import { Button, Stack, Table } from "@chakra-ui/react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function Users() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-lg w-[750px] h-[500px] bg-white p-6">
          <div className="flex flex-row gap-8 items-center">
            <FaCirclePlus className="text-green-500 w-10 h-10" />
            <div className="flex items-center border-4 border-green-800 rounded-md overflow-hidden shadow-lg">
              <Button colorPalette="green" size="md" className="rounded-none">
                سرچ کنید
              </Button>
              <input
                type="text"
                placeholder="سرچ کنید..."
                className="w-full h-10 px-4 outline-none border-none"
              />
              <IoSearch className="w-7 h-7" />
            </div>
          </div>

          <div className="border-4 border-green-500 overflow-y-auto h-72  custom-scrollbar">
            <Stack gap="10">
              <div className="max-h-80  border border-gray-300 rounded-md shadow-lg">
                <Table.Root>
                  <Table.Header className="sticky top-0 bg-white z-10 shadow-md">
                    <Table.Row>
                      <Table.ColumnHeader>نام کاربر</Table.ColumnHeader>
                      <Table.ColumnHeader>ایمیل</Table.ColumnHeader>
                      <Table.ColumnHeader>تاریخ عضویت</Table.ColumnHeader>
                      <Table.ColumnHeader>نقش کاربر</Table.ColumnHeader>
                      <Table.ColumnHeader>رمز کاربر</Table.ColumnHeader>
                      <Table.ColumnHeader>وضعیت حساب</Table.ColumnHeader>
                      <Table.ColumnHeader>تعداد ورود ها</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {items.map((item) => (
                      <Table.Row key={item.id}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell>{item.date}</Table.Cell>
                        <Table.Cell>{item.role}</Table.Cell>
                        <Table.Cell>{item.password}</Table.Cell>
                        <Table.Cell>{item.status}</Table.Cell>
                        <Table.Cell>{item.logIn}</Table.Cell>
                        <Table.Cell></Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
const items = [
  {
    id: 1,
    name: "saba",
    email: "sabahabibi@gmail.com",
    date: "2025/03/02",
    role: "admin",
    status: "فعال ",
    logIn: 5,
  },
  {
    id: 2,
    name: "saba",
    email: "sabahabibi@gmail.com",
    date: "2025/03/02",
    role: "admin",
    status: "فعال ",
    logIn: 5,
  },
  {
    id: 3,
    name: "saba",
    email: "sabahabibi@gmail.com",
    date: "2025/03/02",
    role: "admin",
    status: "فعال ",
    logIn: 5,
  },
  {
    id: 4,
    name: "saba",
    email: "sabahabibi@gmail.com",
    date: "2025/03/02",
    role: "admin",
    password: "1234565",
    status: "فعال ",
    logIn: 5,
  },
];
