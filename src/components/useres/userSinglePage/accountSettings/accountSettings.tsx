import InputField from "@/components/shared/inputs/inputField";
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
    <div className="bg-white flex justify-center gap-10">
      <div className="flex flex-col gap-4">
        <h1 className=" text-black">تنظیمات حساب کاربری</h1>

        <div className="flex flex-col gap-5">
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
            value={phoneNumber}
            onChange={handleInputChange(setPhoneNumber)}
            id="phoneNumber"
          />

          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            ذخیره تغییرات
          </button>
        </div>
      </div>

      <div>
        <img
          src={userImage}
          alt="user"
          className="w-[224px] h-[224px] object-cover"
        />
        <button className="text-black bg-black py-2 px-4 rounded mt-4">
          انتخاب عکس
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
