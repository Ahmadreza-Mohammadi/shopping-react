import { Outlet } from "react-router";
import { Provider } from "../ui/provider";

export default function Layout() {
  return (

    <Provider>
      <Outlet />
    </Provider>
  );
}
