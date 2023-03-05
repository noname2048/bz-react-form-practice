import { ColumnType } from "./types";

const Column = ({ column }: { column: ColumnType }) => {
  return <>{column.title}</>;
};

export default Column;
