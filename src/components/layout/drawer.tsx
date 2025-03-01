import { Box, Button, DrawerContext } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
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
import {  RiMenu3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiFillProduct } from "react-icons/ai";
import Logo from "../../logo/logo";


export const DrawerPanel = () => {
  const navigate = useNavigate();
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
        <RiMenu3Fill />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerContext>
          {(store) => (
            <DrawerBody>
         <Box flexDirection={"column"} display={"flex"} gap={8} marginTop={20}>
              <Logo/>
  <Button 
    onClick={() => navigate(PROFILE_ROUTE)} 
    colorScheme="green"
    variant="ghost"
    _hover={{
      border: "none", 
      borderColor: "green.500", 
      bg: "green.100", 
      boxShadow: "lg" 
    }} 
    display="flex" 
    gap={2}
  >
    Profile <CgProfile />
  </Button>

  <Button 
    onClick={() => navigate(PRODUCT_ROUTE)} 
    colorScheme="green"
    variant="ghost"
    _hover={{
      border: "none", 
      borderColor: "green.500", 
      bg: "green.100",
      boxShadow: "lg" 
    }}
  >
    Product <AiFillProduct />
  </Button>

  <Button 
    onClick={() => navigate(SALE_ROUTE)} 
    colorScheme="green"
    variant="ghost"
    _hover={{
      border: "none", 
      borderColor: "green.500", 
      bg: "green.100",
      boxShadow: "lg"
    }}
  >
    Sales
  </Button>

  <Button 
    onClick={() => navigate(ADD_PRODUCTS_ROUTE)} 
    colorScheme="green"
    variant="ghost"
    _hover={{
      border: "none", 
      borderColor: "green.500", 
      bg: "green.100",
      boxShadow: "lg"
    }}
  >
    Add Product
  </Button>
</Box>


            </DrawerBody>
          )}
        </DrawerContext>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
