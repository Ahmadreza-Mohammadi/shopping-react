import { Button, Flex, Heading, Image, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import userImage from "../../../../assets/user/user.png";

function AccountSettings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <Flex
      border="1px solid"
      borderColor="gray.300"
      p={6}
      rounded="lg"
      bg="white"
      shadow="md"
      maxW="2xl"
      mx="auto"
      align="center"
      justify="space-between"
    >
      <VStack spacing={4}>
        <Image
          src={userImage}
          alt="user"
          boxSize="144px"
          objectFit="cover"
          borderRadius="full"
          border="1px solid"
          borderColor="gray.300"
        />
        <Button
          colorScheme="green"
          variant="solid"
          borderRadius="3xl"
          border="1px solid"
          borderColor="green.500"
          py={2}
          px={4}
          mt={4}
          transition="all 0.3s ease-in-out"
          _hover={{ bg: "green.00", transform: "scale(1.05)" }}
        >
          ذخیره تغییرات
        </Button>
      </VStack>

      <VStack spacing={5} w="full" maxW="md">
        <Heading as="h2" size="md" color="gray.900" mb={6}>
          تنظیمات حساب کاربری
        </Heading>

        <Input
          placeholder="نام خود را وارد کنید"
          value={firstName}
          onChange={handleInputChange(setFirstName)}
          borderColor="gray.300"
          fontSize="md"
          py={3}
          px={4}
          size="lg"
          _focus={{
            borderColor: "green.500",
            boxShadow: "0 0 0 1px green.500",
          }}
        />

        <Input
          placeholder="نام خانوادگی خود را وارد کنید"
          value={lastName}
          onChange={handleInputChange(setLastName)}
          borderColor="gray.300"
          size="lg"
          _focus={{
            borderColor: "green.500",
            boxShadow: "0 0 0 1px green.500",
          }}
        />

        <Input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={handleInputChange(setEmail)}
          borderColor="gray.300"
          size="lg"
          _focus={{
            borderColor: "green.500",
            boxShadow: "0 0 0 1px green.500",
          }}
        />

        <Input
          placeholder="شماره تلفن خود را وارد کنید"
          value={phoneNumber}
          onChange={handleInputChange(setPhoneNumber)}
          borderColor="gray.300"
          size="lg"
          _focus={{
            borderColor: "green.500",
            boxShadow: "0 0 0 1px green.500",
          }}
        />

        <Button
          colorScheme="green"
          variant="solid"
          borderRadius="3xl"
          border="1px solid"
          borderColor="green.500"
          py={2}
          px={4}
          mt={4}
          transition="all 0.3s ease-in-out"
          _hover={{ bg: "green.600", transform: "scale(1.05)" }}
        >
          ذخیره تغییرات
        </Button>
      </VStack>
    </Flex>
  );
}

export default AccountSettings;
