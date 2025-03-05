import { Input } from "@chakra-ui/react";

function InputField({ label, type, placeholder, value, onChange, id ,name}) {
  return (
    <div className="mb-6 w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-3"
        style={{ marginBottom: "8px" }}
      >
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        borderColor="gray.300"
        size="lg"
        _focus={{
          borderColor: "green.500",
          boxShadow: "0 0 0 1px green.500",
        }}
        variant="outline"
        w="full"
        py={4}
        px={5}
        borderRadius="lg"
        bg="gray.50"
        _hover={{
          borderColor: "green.500",
        }}
      />
    </div>
  );
}

export default InputField;
