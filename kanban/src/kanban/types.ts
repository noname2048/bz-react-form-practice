interface Task {
  id: string;
  content: string;
  is_done: boolean;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface Kanban {
  id: string;
  title: string;
  columns: Column[];
}

export type { Task, Column, Kanban };
