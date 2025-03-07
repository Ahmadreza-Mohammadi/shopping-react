import GreenButton from "@/components/shared/buttons/greenButton";
import InputField from "@/components/shared/inputs/inputField";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

function BillingAddress() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (setter:any) => (e:any) => {
    setter(e.target.value);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="white"
      p={6}
      rounded="lg"
      maxW="2xl"
      mx="auto"
      shadow="sm"
    >
      <Heading as="h1" size="lg" color="gray.900" mb={6}>
        آدرس صورت‌حساب
      </Heading>

      <VStack spacing={5} w="full">
        <Flex w="full" gap={4}>
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
        </Flex>

        <InputField
          label="آدرس"
          placeholder="آدرس خود را وارد کنید"
          value={address}
          onChange={handleInputChange(setAddress)}
          id="address"
        />

        <Flex w="full" gap={4}>
          <InputField
            label="کشور"
            placeholder="کشور خود را وارد کنید"
            value={country}
            onChange={handleInputChange(setCountry)}
            id="country"
          />
          <InputField
            label="کد پستی"
            placeholder="کد پستی خود را وارد کنید"
            value={postalCode}
            onChange={handleInputChange(setPostalCode)}
            id="postalCode"
          />
        </Flex>

        <Flex w="full" gap={4}>
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
            value={phone}
            onChange={handleInputChange(setPhone)}
            id="phone"
          />
        </Flex>

        <GreenButton variant="solid">ذخیره اطلاعات</GreenButton>
      </VStack>
    </Flex>
  );
}

export default BillingAddress;
