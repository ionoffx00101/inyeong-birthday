import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const SidebarItem = ({
  link,
  label,
  icon,
  isDrawerOpen,
}: {
  link: string;
  label: string;
  icon: ReactNode;
  isDrawerOpen: boolean;
}) => {
  return (
    <li>
      <Link
        to={link}
        activeProps={{
          className: "menu-active",
        }}
      >
        {icon}
        <span className={isDrawerOpen ? "" : "hidden"}>{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;