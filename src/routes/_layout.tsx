import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  Gift,
  LucideHome,
  PanelLeftClose,
  PanelLeftOpen,
  ScrollText,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SidebarItem from "@/components/navigation/SidebarItem.tsx";
import LanguageSwitcher from "@/components/LanguageSwitcher.tsx";
import ThemeToggle from "@/components/ThemeToggle.tsx";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={
        isDrawerOpen ? "drawer drawer-open lg:drawer-open" : "drawer"
      }
    >
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <nav className="navbar w-full flex-shrink-0 bg-base-300">
          <button type="button" onClick={handleDrawerToggle}>
            {isDrawerOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
          </button>

          <div className="flex-1 px-4">{t("appTitle")}</div>

          <div className="flex flex-none items-center gap-0.5">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
        <div className="flex-1 overflow-hidden p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label={t("a11y.closeSidebar")}
          className="drawer-overlay"
        />
        <div className="flex min-h-full w-56 flex-col items-start bg-base-200 pt-16">
          <ul className="menu w-full grow gap-2">
            <SidebarItem
              link="/"
              label={t("sidebar.home")}
              icon={<LucideHome />}
              isDrawerOpen={isDrawerOpen}
            />
            <SidebarItem
              link="/about"
              label={t("sidebar.about")}
              icon={<ScrollText />}
              isDrawerOpen={isDrawerOpen}
            />
            <SidebarItem
              link="/gift"
              label={t("sidebar.gift")}
              icon={<Gift />}
              isDrawerOpen={isDrawerOpen}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
