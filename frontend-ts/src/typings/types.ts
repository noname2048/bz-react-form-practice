interface KanbanItemType {
  uuid4: string;
  content: string;
}

interface KanbanColumType {
  title: string;
  items: KanbanItemType[];
}

export type { KanbanItemType, KanbanColumType };
