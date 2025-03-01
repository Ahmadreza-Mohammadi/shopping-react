import { userRegister } from "@/api/signup.api";
import { HOME_ROUTE, PROFILE_ROUTE } from "@/router/const";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function registerHandler(e) {
    e.preventDefault();
    userRegister(JSON.stringify({ email, password }));
    navigate(PROFILE_ROUTE);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <form
        onSubmit={registerHandler}
        className="flex flex-col justify-around gap-2 bg-white w-[480px] p-4 h-64 rounded-xl shadow-xl"
      >
        <div className="flex flex-col gap-2 ">
          <h1 className="text-center font-bold text-2xl">پنل ثبت نام </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-400 border-1 p-2 rounded-md"
            placeholder="ایمیل"
            type="text"
            name="username"
          />
          <div className="flex justify-between items-center border-gray-400 border-1 rounded-md">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 outline-none"
              placeholder="رمز عبور"
              type="password"
              name="password"
            />
            <img
              className="h-4 mr-2 hover:cursor-pointer"
              src="https://www.svgrepo.com/show/511132/show.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="p-2 rounded-2xl border-black border-1 w-full bg-[#00B207] text-white hover:cursor-pointer"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
}
