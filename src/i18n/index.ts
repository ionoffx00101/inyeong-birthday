import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const STORAGE_KEY = "i18nextLng";

const resources = {
  ko: {
    translation: {
      appTitle: "프론트엔드 개발자 황인영",
      sidebar: {
        home: "홈",
        gift: "선물",
        todo: "TODO(Local data)",
        crud: "CRUD(Remote data)",
      },
      home: {
        lead: "생일 페이지에 온 걸 환영해요.",
      },
      a11y: {
        languageMenu: "언어 선택",
        closeSidebar: "사이드바 닫기",
      },
    },
  },
  zh: {
    translation: {
      appTitle: "前端开发者 黄寅瑛",
      sidebar: {
        home: "首页",
        gift: "礼物",
        todo: "TODO(Local data)",
        crud: "CRUD(Remote data)",
      },
      home: {
        lead: "欢迎来到生日页面。",
      },
      a11y: {
        languageMenu: "选择语言",
        closeSidebar: "关闭侧边栏",
      },
    },
  },
  en: {
    translation: {
      appTitle: "Frontend Developer Inyeong Hwang",
      sidebar: {
        home: "Home",
        gift: "Gifts",
        todo: "TODO(Local data)",
        crud: "CRUD(Remote data)",
      },
      home: {
        lead: "Welcome to the birthday page.",
      },
      a11y: {
        languageMenu: "Choose language",
        closeSidebar: "Close sidebar",
      },
    },
  },
} as const;

function getInitialLng(): "ko" | "zh" | "en" {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "ko" || s === "zh" || s === "en") return s;
  } catch {
    /* ignore */
  }
  return "ko";
}

function setHtmlLang(lng: string) {
  document.documentElement.lang = lng === "zh" ? "zh-CN" : lng;
}

void i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLng(),
  fallbackLng: "ko",
  interpolation: { escapeValue: false },
});

setHtmlLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* ignore */
  }
  setHtmlLang(lng);
});

export default i18n;
