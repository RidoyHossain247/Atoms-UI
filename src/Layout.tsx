import { Outlet } from "react-router-dom";
import TopNavbar from "./components/organisms/TopNavbar";

const Layout = () => {
  return (
    <div>
      <TopNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
