import { makeAutoObservable } from "mobx";
interface StoreProps {
  name: string;
  userName: string;
  setName: (value: string) => void;
  setUserName: (value: string) => void;
}
export default makeAutoObservable<StoreProps>({
  name: "",
  userName: localStorage.getItem("userName") || "",
  setName(name: string) {
    this.name = name;
  },
  setUserName(userName: string) {
    console.log("userNameuserNameuserNameuserName");
    localStorage.setItem("userName", userName);
    this.userName = userName;
  },
});
