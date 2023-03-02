import { useRecoilState } from "recoil";
import kanbanState from "./atoms";
import {Kanban} from "./types";

const KanbanPage = () => {
  const [kanban, setKanban] = useRecoilState<Kanban>(kanbanState);
  return <>{kanban?.title}</>;
};

export default KanbanPage;
