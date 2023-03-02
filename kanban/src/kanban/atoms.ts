import { atom } from "recoil";
import { Kanban } from "./types";

const init = [
  {
    id: "INTJ",
    title: "todo list",
    columns: [
      {
        title: "yesterday",
        id: "yesterday",
        tasks: [{ id: "refactor code", content: "refactor code" }],
      },
      {
        title: "today",
        id: "today",
        tasks: [{ id: "get bug", content: "get bug" }],
      },
      {
        title: "tomorrow",
        id: "tomorrow",
        tasks: [{ id: "get a job", content: "get a job" }],
      },
    ],
  },
];

const kanbanState = atom({
  key: "kanbanState",
  default: [],
});

export default kanbanState;
