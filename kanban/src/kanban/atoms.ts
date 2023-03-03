import { atom } from "recoil";
import { Kanban } from "./types";

const init: Kanban = {
  id: "todo list",
  title: "todo list",
  columns: [
    {
      title: "yesterday",
      id: "yesterday",
      tasks: [
        { id: "refactor code", content: "refactor code", is_done: false },
      ],
    },
    {
      title: "today",
      id: "today",
      tasks: [{ id: "get bug", content: "get bug", is_done: false }],
    },
    {
      title: "tomorrow",
      id: "tomorrow",
      tasks: [{ id: "get a job", content: "get a job", is_done: false }],
    },
  ],
};

const kanbanState = atom<Kanban>({ key: "kanban", default: init });

export default kanbanState;
