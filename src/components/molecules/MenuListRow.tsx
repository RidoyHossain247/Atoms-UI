import { useLocation } from "react-router-dom";
import Link from "../atoms/Link";

type INavItem = {
  label: string;
  url: string;
};
const navbarList: INavItem[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const MenuListRow = () => {
  const { pathname } = useLocation();
  return (
    <ul className="flex items-center gap-4">
      {navbarList.map((item: INavItem, index: number) => {
        return (
          <li key={index}>
            <Link
              className={`px-3 py-1 rounded-sm ${
                pathname === item.url
                  ? "text-gray-50 bg-[var(--primary)]"
                  : "text-[var(--primary)] hover:bg-[var(--primary)]/10"
              } `}
              url={item.url}
              label={item.label}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuListRow;
