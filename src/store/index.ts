import { observer } from "mobx-react";
import user from "./modules/user";
import theme from "./modules/theme";
function useStore() {
  return {
    user,
    theme,
  };
}
export { observer, useStore };
