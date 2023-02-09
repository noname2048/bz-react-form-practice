export interface Task {
    id: string,
    content: string
}

export interface Column {
    id: string,
    title: string,
    taskIds: Array<string>;
}

export interface InitData  {
    tasks: {[id: string]: Task},
    columns: {[id: string]: Column},
    columnOrder: Array<string>
}

export interface droppableContent {
    droppableId: string
    index: number
}

export interface OnDragStart {
    source: droppableContent
}

export interface OnDragUpdate {
    destination: droppableContent
}

export interface OnDragEnd {
    source: droppableContent,
    destination: droppableContent,
    draggableId: string,
    type: string
}
