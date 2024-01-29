import { useMemo, useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import zh_CN from "antd/locale/zh_CN";
import en_US from "antd/locale/en_US";
import { useStore } from "@/store";
import i18next from "i18next";

export const dayjsLocaleObj: Record<string, string> = {
  zh_CN: "zh-cn",
  en_US: "en",
};
export const localeObj: Record<string, typeof zh_CN> = {
  zh_CN: zh_CN,
  en_US: en_US,
};
export const i18nTypeObj = {
  zh_CN: "zh",
  en_US: "en",
} as const;
export const useAntdI18n = () => {
  const { i18n } = useStore();

  const [locale, setLocale] = useState<typeof zh_CN>(localeObj[i18n.lang]);
  dayjs.locale(dayjsLocaleObj[i18n.lang]);
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setLocale(localeObj[i18n.lang]);
    dayjs.locale(dayjsLocaleObj[i18n.lang]);
    i18next.changeLanguage(i18nTypeObj[i18n.lang as keyof typeof i18nTypeObj]);
  }, [i18n.lang]);

  return {
    locale,
  };
};
