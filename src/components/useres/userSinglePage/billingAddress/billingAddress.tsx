import InputField from "@/components/shared/inputs/inputField";
import { useState } from "react";

function BillingAddress() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className="bg-white flex justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold mb-6 text-black">
          آدرس صورت‌حساب
        </h1>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <InputField
              label="نام"
              type="text"
              placeholder="نام خود را وارد کنید"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
              id="firstName"
            />

            <InputField
              label="نام خانوادگی"
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید"
              value={lastName}
              onChange={handleInputChange(setLastName)}
              id="lastName"
            />
          </div>

          <InputField
            label="آدرس"
            type="text"
            placeholder="آدرس خود را وارد کنید"
            value={address}
            onChange={handleInputChange(setAddress)}
            id="address"
          />

          <div className="flex gap-4">
            <InputField
              label="کشور/منطقه"
              type="text"
              placeholder="کشور خود را وارد کنید"
              value={country}
              onChange={handleInputChange(setCountry)}
              id="country"
            />
            <InputField
              label="کد پستی"
              type="text"
              placeholder="کد پستی خود را وارد کنید"
              value={postalCode}
              onChange={handleInputChange(setPostalCode)}
              id="postalCode"
            />
          </div>
          <div className="flex gap-4">
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
              type="text"
              placeholder="شماره تلفن خود را وارد کنید"
              value={phone}
              onChange={handleInputChange(setPhone)}
              id="phone"
            />
          </div>

          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress;
