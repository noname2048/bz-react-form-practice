interface TaskType {
  id: string;
  content: string;
  is_done: boolean;
}

interface ColumnType {
  id: string;
  title: string;
  tasks: TaskType[];
}

interface KanbanType {
  id: string;
  title: string;
  columns: ColumnType[];
}

export type { TaskType, ColumnType, KanbanType };
