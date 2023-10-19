import { action, makeObservable, observable } from "mobx";

class Counter {
  count = 0;
  constructor() {
    makeObservable(this, {
      count: observable,
      up: action,
      down: action,
    });
  }
  up() {
    this.count++;
  }
  down() {
    this.count--;
  }
}
const counter = new Counter();
export default counter;
