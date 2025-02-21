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
    <form onSubmit={loginHandler} className="flex gap-2">
      <input
        className="border-black border-1 p-1"
        placeholder="username"
        type="text"
        name="username"
      />
      <input
        className="border-black border-1 p-1"
        placeholder="password"
        type="password"
        name="password"
      />
      <button type="submit" className="p-1 rounded-md border-black border-1">
        Login
      </button>
    </form>
  );
}
