import { observer } from "mobx-react";
import user from "./modules/user";
import theme from "./modules/theme";
import i18n from "./modules/i18n";
import layout from "./modules/layout";
import tags from "./modules/tags";
function useStore() {
  return {
    user,
    theme,
    i18n,
    layout,
    tags,
  };
}
export { observer, useStore };
