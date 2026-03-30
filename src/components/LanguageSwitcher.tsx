import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "ko" as const, label: "한국어" },
  { code: "zh" as const, label: "中文" },
  { code: "en" as const, label: "English" },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="btn btn-ghost btn-circle"
        aria-label={t("a11y.languageMenu")}
        aria-haspopup="menu"
      >
        <Languages className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <ul
        tabIndex={0}
        role="menu"
        className="dropdown-content menu rounded-box z-50 w-36 bg-base-100 p-2 shadow-sm"
      >
        {LANGS.map(({ code, label }) => (
          <li key={code} role="none">
            <button
              type="button"
              role="menuitem"
              className={i18n.language === code ? "active" : undefined}
              onClick={() => void i18n.changeLanguage(code)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
