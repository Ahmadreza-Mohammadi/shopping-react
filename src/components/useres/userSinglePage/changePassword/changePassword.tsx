import InputField from "@/components/shared/inputs/inputField";
import { useState } from "react";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (setter: any) => (e: any) => {
    setter(e.target.value);
  };

  return (
    <div className="bg-white flex justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold mb-6 text-black">تغییر پسورد</h1>

        <form className="flex flex-col gap-5">
          <InputField
            label=" رمز فعلی"
            type="password"
            placeholder="Password"
            value={currentPassword}
            onChange={handleInputChange(setCurrentPassword)}
            id="currentPassword"
          />

          <div className="flex gap-4">
            <InputField
              label=" رمز جدید"
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={handleInputChange(setNewPassword)}
              id="newPassword"
            />
            <InputField
              label=" تایید رمز"
              type="password"
              placeholder=" Password"
              value={confirmPassword}
              onChange={handleInputChange(setConfirmPassword)}
              id="confirmPassword"
            />
          </div>

          <button type="submit" className="bg-black">
            تغییر پسورد
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
