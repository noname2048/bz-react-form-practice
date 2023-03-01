import { useRecoilState } from "recoil";
import kanbanState from "./atoms";

const KanbanPage = () => {
  const kanban = useRecoilState(kanbanState);
  return <></>;
};

export default KanbanPage;
