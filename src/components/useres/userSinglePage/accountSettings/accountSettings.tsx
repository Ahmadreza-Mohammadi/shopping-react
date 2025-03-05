import GreenButton from "@/components/shared/buttons/greenButton";
import InputField from "@/components/shared/inputs/inputField";

import { fetchUsers } from "@/api/users.api";
import { Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import userImage from "../../../../assets/user/user.png";

function AccountSettings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    async function getUserData() {
      const users = await fetchUsers();
      if (users.length > 0) {
        const user = users[0];
        setFirstName(user.firstName || "");
        setLastName(user.lastName || "");
        setEmail(user.email || "");
        setPhoneNumber(user.phoneNumber || "");
      }
    }
    getUserData();
  }, []);

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
      shadow="sm"
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
        <GreenButton variant="solid">انتخاب عکس</GreenButton>
      </VStack>

      <VStack spacing={5} w="full" maxW="md">
        <Heading as="h2" size="md" color="gray.900" mb={6}>
          تنظیمات حساب کاربری
        </Heading>

        <InputField
          label="نام"
          placeholder="نام خود را وارد کنید"
          value={firstName}
          onChange={handleInputChange(setFirstName)}
          id="firstName"
        />

        <InputField
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید"
          value={lastName}
          onChange={handleInputChange(setLastName)}
          id="lastName"
        />

        <InputField
          label="ایمیل"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={handleInputChange(setEmail)}
          id="email"
        />

        <InputField
          label="شماره تلفن"
          placeholder="شماره تلفن خود را وارد کنید"
          value={phoneNumber} // نمایش شماره تلفن دریافتی
          onChange={handleInputChange(setPhoneNumber)}
          id="phoneNumber"
        />

        <GreenButton variant="solid">ذخیره تغییرات</GreenButton>
      </VStack>
    </Flex>
  );
}

export default AccountSettings;
