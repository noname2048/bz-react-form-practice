const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "물마시기" },
    "task-2": { id: "task-2", content: "쓰레기통비우기" },
    "task-3": { id: "task-3", content: "모니터 닦이" },
    "task-4": { id: "task-4", content: "요리하기" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default initialData;
