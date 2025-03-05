import { Button } from "@chakra-ui/react";

function GreenButton({ variant, children, type}) {
  return (
    <Button
      colorScheme="green"
      variant={variant}
      type={type} 
      borderRadius="3xl"
      border="1px solid"
      borderColor="green.500"
      py={2}
      px={4}
      mt={4}
      transition="all 0.3s ease-in-out"
      _hover={{
        bg: variant === "solid" ? "green.600" : "green.50",
        transform: "scale(1.05)",
      }}
    >
      {children}
    </Button>
  );
}

export default GreenButton;
