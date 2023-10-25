import { useMemo, useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import zh_CN from "antd/locale/zh_CN";
import en_US from "antd/locale/en_US";
import { useStore } from "@/store";

export const useAntdI18n = () => {
  const { i18n } = useStore();
  const localeObj: Record<string, typeof zh_CN> = {
    zh_CN: zh_CN,
    en_US: en_US,
  };
  const dayjsLocaleObj: Record<string, string> = {
    zh_CN: "zh-cn",
    en_US: "en",
  };
  const [locale, setLocale] = useState<typeof zh_CN>(localeObj[i18n.lang]);
  dayjs.locale(dayjsLocaleObj[i18n.lang]);
  useEffect(() => {
    setLocale(localeObj[i18n.lang]);
    dayjs.locale(dayjsLocaleObj[i18n.lang]);
  }, [i18n.lang]);
  return {
    locale,
  };
};
