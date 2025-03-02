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
  ADD_PRODUCTS_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SALE_ROUTE,
} from "@/router/const";
import { RiMenu3Fill } from "react-icons/ri";

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
              <Box flexDirection="column" display="flex" gap={4}>
                <Button
                  background="gray.400"
                  _hover={{ background: "gray.600", color: "white" }}
                  onClick={() => navigate(PROFILE_ROUTE)}
                >
                  Profile
                </Button>
                <Button
                  background="gray.400"
                  _hover={{ background: "gray.600", color: "white" }}
                  onClick={() => navigate(PRODUCT_ROUTE)}
                >
                  Products
                  
                </Button>
                <Button
                  background="gray.400"
                  _hover={{ background: "gray.600", color: "white" }}
                  onClick={() => navigate(SALE_ROUTE)}
                >
                  Sales
                </Button>
                <Button
                  background="gray.400"
                  _hover={{ background: "gray.600", color: "white" }}
                  onClick={() => navigate(ADD_PRODUCTS_ROUTE)}
                >
                  Add Product
                </Button>
              </Box>
            </DrawerBody>
          )}
        </DrawerContext>
      </DrawerContent>
    </DrawerRoot>
  );
};
