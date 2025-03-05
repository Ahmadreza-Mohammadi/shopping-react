import { fetchUsers } from "@/api/users.api";
import { USERPROFILE_ROUTE } from "@/router/const";
import { Button, Stack, Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import Header from "../home/header/header";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    getData();
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl w-[750px] h-[500px] bg-white p-6">
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

          <div className="border-4 border-green-500 overflow-y-auto h-72 custom-scrollbar">
            <Stack gap="10">
              <div className="max-h-80 border border-gray-300 rounded-md shadow-lg">
                <Table.Root>
                  <Table.Header className="sticky top-0 bg-white z-10 shadow-md">
                    <Table.Row>
                      <Table.ColumnHeader>نام کاربر</Table.ColumnHeader>
                      <Table.ColumnHeader>ایمیل</Table.ColumnHeader>
                      <Table.ColumnHeader>تاریخ عضویت</Table.ColumnHeader>
                      <Table.ColumnHeader>نقش کاربر</Table.ColumnHeader>
                      <Table.ColumnHeader>وضعیت حساب</Table.ColumnHeader>
                      <Table.ColumnHeader>تعداد ورودها</Table.ColumnHeader>
                      <Table.ColumnHeader>مشاهده کاربر</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {users.map((user) => (
                      <Table.Row key={user.id}>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.date}</Table.Cell>
                        <Table.Cell>{user.role}</Table.Cell>
                        <Table.Cell>{user.status}</Table.Cell>
                        <Table.Cell>{user.logIn}</Table.Cell>
                        <Table.Cell>
                          <Button onClick={() => navigate(USERPROFILE_ROUTE)}>
                            مشاهده
                          </Button>
                        </Table.Cell>
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
