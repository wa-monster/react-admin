import { observer } from "mobx-react";
import user from "./modules/user";
import theme from "./modules/theme";
import i18n from "./modules/i18n";
import layout from "./modules/layout";
function useStore() {
  return {
    user,
    theme,
    i18n,
    layout,
  };
}
export { observer, useStore };
