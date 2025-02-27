import { Outlet } from "react-router";
import { DrawerPanel } from "./drawer";
import { Provider } from "../ui/provider";

export default function Layout() {
  return (
    <Provider>
      <Outlet />
      <DrawerPanel />
    </Provider>
  );
}
