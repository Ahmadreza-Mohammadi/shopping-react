import { Box, Button, DrawerContext } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useNavigate } from "react-router";
import {
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  INVENTORY_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SALE_ROUTE,
} from "@/router/const";

import { RiMenu3Fill, RiSearch2Line } from "react-icons/ri";
import { CgHome, CgProfile } from "react-icons/cg";
import { AiFillProduct } from "react-icons/ai";
import Logo from "../../logo/logo";
import { IoStorefront } from "react-icons/io5";

export const DrawerPanel = () => {
  const navigate = useNavigate();
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          background="green.600"
          _hover={{ background: "green.400" }}
        >
          <RiMenu3Fill />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerContext>
          {(store) => (
            <DrawerBody>
              <Box
                flexDirection={"column"}
                display={"flex"}
                gap={8}
                marginTop={20}
              >
                <Logo />
                <Button
                  onClick={() => navigate(HOME_ROUTE)}
                  colorScheme="green"
                  variant="ghost"
                  _hover={{
                    border: "none",
                    borderColor: "green.500",
                    bg: "green.100",
                    boxShadow: "lg",
                    color: "black",
                  }}
                >
                  داشبورد <CgHome />
                </Button>
                <Button
                  onClick={() => navigate(PROFILE_ROUTE)}
                  colorScheme="green"
                  variant="ghost"
                  _hover={{
                    border: "none",
                    borderColor: "green.500",
                    bg: "green.100",
                    boxShadow: "lg",
                    color: "black",
                  }}
                  display="flex"
                  gap={2}
                >
                  پروفایل <CgProfile />
                </Button>

                <Button
                  onClick={() => navigate(PRODUCT_ROUTE)}
                  colorScheme="green"
                  variant="ghost"
                  _hover={{
                    border: "none",
                    borderColor: "green.500",
                    bg: "green.100",
                    boxShadow: "lg",
                    color: "black",
                  }}
                >
                  محصولات <AiFillProduct />
                </Button>

                <Button
                  onClick={() => navigate(SALE_ROUTE)}
                  colorScheme="green"
                  variant="ghost"
                  _hover={{
                    border: "none",
                    borderColor: "green.500",
                    bg: "green.100",
                    boxShadow: "lg",
                    color: "black",
                  }}
                >
                  فروش <RiSearch2Line />
                </Button>
                <Button
                  onClick={() => navigate(INVENTORY_ROUTE)}
                  colorScheme="green"
                  variant="ghost"
                  _hover={{
                    border: "none",
                    borderColor: "green.500",
                    bg: "green.100",
                    boxShadow: "lg",
                    color: "black",
                  }}
                >
                  لیست موجودی <IoStorefront />
                </Button>
              </Box>
            </DrawerBody>
          )}
        </DrawerContext>
      </DrawerContent>
    </DrawerRoot>
  );
};
