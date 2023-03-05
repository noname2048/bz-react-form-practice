import { useRecoilState } from "recoil";
import kanbanState from "./atoms";
import { KanbanType } from "./types";
import styled from "styled-components";
import Column from "./Column";

const KanbanPage = () => {
  const [kanban] = useRecoilState<KanbanType>(kanbanState);
  return (
    <Container>
      {kanban?.title}
      <ColumnContainer>
        {kanban.columns.map((value, index) => {
          return <Column column={value} key={index}/>;
        })}
      </ColumnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

export default KanbanPage;
