import { fetchUsers } from "@/api/users.api";
import { USERPROFILE_ROUTE } from "@/router/const";
import { Button, Stack, Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Header } from "../home/header/header";

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
              <div className="max-h-80 border border-gray-300 rounded-md shadow-lg w-[740px]">
                <Table.Root>
                  <Table.Header className="sticky top-0 bg-white z-10 shadow-2xl">
                    <Table.Row background={"white"}>
                      <Table.ColumnHeader color={"black"}>
                        کشور کاربر
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color={"black"}>
                        ایمیل
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color={"black"}>
                        {" "}
                        نام
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color={"black"}>
                        نام خانوادگی{" "}
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color={"black"}>
                        آدرس
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color={"black"}>
                        آیدی
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color={"black"}>
                        مشاهده کاربر{" "}
                      </Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {users.map((item) => (
                      <Table.Row key={item.id} background={"white"}>
                        <Table.Cell color={"black"}>{item.country}</Table.Cell>
                        <Table.Cell color={"black"}>{item.email}</Table.Cell>
                        <Table.Cell color={"black"}>
                          {item.firstName}
                        </Table.Cell>
                        <Table.Cell color={"black"}>{item.lastName}</Table.Cell>
                        <Table.Cell color={"black"}>{item.address}</Table.Cell>
                        <Table.Cell color={"black"}>{item.id}</Table.Cell>
                        <Table.Cell color={"black"} cursor={"pointer"} onClick={() => navigate(USERPROFILE_ROUTE)}>
                          نمایش
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
