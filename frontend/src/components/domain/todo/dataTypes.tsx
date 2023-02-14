export interface Task {
  id: string;
  content: string;
}

export interface Column {
  id: string;
  title: string;
  taskIds: Array<string>;
}

export interface InitData {
  tasks: { [id: string]: Task };
  columns: { [id: string]: Column };
  columnOrder: Array<string>;
}

export interface DraggableLocation {
  droppableId: string;
  index: number;
}

export interface DroppableRubric {
  draggableId: string;
  type: string;
  source: DraggableLocation;
}

enum MovementMode {
  "FLUID",
  "SNAP",
}

type MovementModeType = "FLUID" | "SNAP";

// type 과 interface 의 차이를 알아볼것
export interface DragStart extends DroppableRubric {
  movementMode: MovementModeType;
}

export type DroppableRubricType = {
  draggableId: string;
  type: string;
};

export type DragStartType = DroppableRubricType & {
  movementMode: MovementModeType;
};

export interface DragUpdate {
  destination: DroppableRubric;
}

export interface OnDragEnd {
  source: DroppableRubric;
  destination: DroppableRubric;
  draggableId: string;
  type: string;
}

export interface IniData {
  tasks: {[id: string]: Task},
  columns: {[id: string]: Column},
  columnOrder: Array<string>,
}
