import { observer } from "mobx-react";
import user from "./modules/user";
function useStore() {
  return {
    user,
  };
}
export { observer, useStore };
