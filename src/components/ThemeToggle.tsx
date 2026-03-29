import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";

function getTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  const obs = new MutationObserver(() => onStoreChange());
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => obs.disconnect();
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");

  const toggle = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
  }, [theme]);

  return (
    <button
      type="button"
      className="btn btn-ghost btn-circle"
      aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
      onClick={toggle}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" strokeWidth={1.75} />
      ) : (
        <Sun className="h-5 w-5" strokeWidth={1.75} />
      )}
    </button>
  );
}
