import GreenButton from "@/components/shared/buttons/greenButton";
import InputField from "@/components/shared/inputs/inputField";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (setter) => (e) => {
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
        تغییر پسورد
      </Heading>

      <VStack spacing={5} w="full">
        <InputField
          label="رمز فعلی"
          type="password"
          placeholder="رمز فعلی خود را وارد کنید"
          value={currentPassword}
          onChange={handleInputChange(setCurrentPassword)}
          id="currentPassword"
          borderColor="gray.300"
          _focus={{
            borderColor: "green.500",
            boxShadow: "0 0 0 1px green.500",
          }}
        />

        <div className="flex gap-4">
          <InputField
            label="رمز جدید"
            type="password"
            placeholder="رمز جدید خود را وارد کنید"
            value={newPassword}
            onChange={handleInputChange(setNewPassword)}
            id="newPassword"
            borderColor="gray.300"
            _focus={{
              borderColor: "green.500",
              boxShadow: "0 0 0 1px green.500",
            }}
          />
          <InputField
            label="تایید رمز"
            type="password"
            placeholder="رمز جدید را تایید کنید"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
            id="confirmPassword"
            borderColor="gray.300"
            _focus={{
              borderColor: "green.500",
              boxShadow: "0 0 0 1px green.500",
            }}
          />
        </div>

        <GreenButton variant="solid">تغییر رمز</GreenButton>
      </VStack>
    </Flex>
  );
}

export default ChangePassword;
