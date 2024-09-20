import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_US from "./en-us.json";
import zh_CN from "./zh-cn.json";
i18n
  .use(LanguageDetector) //检测用户语言
  .use(initReactI18next) //把i18n实例传给react-i18next
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React已经转义了
    },
    resources: {
      en: {
        translation: en_US,
      },
      zh: {
        translation: zh_CN,
      },
    },
  });

export default i18n;
