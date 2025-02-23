import { useNavigate } from "react-router";
import { userLogin } from "../../api/login.api";
import { setInLocalStorage } from "../../utils/utils";
import { HOME_ROUTE } from "../../router/const";

export default function Login() {
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    userLogin({ email: username.value, password: password.value })
      .then((res) => {
        setInLocalStorage("accessToken", res.accessToken);
        navigate(HOME_ROUTE);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={loginHandler}
        className="flex flex-col justify-around gap-2 bg-white w-[480px] p-4 h-64 rounded-xl shadow-xl"
      >
        <div className="flex flex-col gap-2 ">
          <h1 className="text-center font-bold text-2xl">Sign In</h1>
          <input
            className="border-gray-400 border-1 p-2 rounded-md"
            placeholder="username"
            type="text"
            name="username"
          />
          <div className="flex justify-between items-center border-gray-400 border-1 rounded-md">
          <input
            className="w-full p-2"
            placeholder="password"
            type="password"
            name="password"
          />
          <img className="h-4 mr-2 hover:cursor-pointer" src="https://www.svgrepo.com/show/511132/show.svg" alt="" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="p-2 rounded-2xl border-black border-1 w-full bg-[#00B207] text-white hover:cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
