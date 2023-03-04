import { useRecoilState } from "recoil";
import kanbanState from "./atoms";
import {Kanban} from "./types";
import styled from "styled-components"

const KanbanPage = () => {
  const [kanban, setKanban] = useRecoilState<Kanban>(kanbanState);
  return <Container>{kanban?.title}</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
export default KanbanPage;
