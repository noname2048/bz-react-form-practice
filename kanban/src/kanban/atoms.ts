import { atom } from "recoil";
import { Kanban } from "./types";

const kanbanState = atom({
  key: "kanbanState",
  default: [],
});

export default kanbanState;
