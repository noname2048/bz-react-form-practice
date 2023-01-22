import styled from "styled-components";

const KanbanNav = () => {
  return (
    <Container>
      <span>status: 2</span>
    </Container>
  );
};

export default KanbanNav;

const Container = styled.div`
  color: white;
  display: flex;
  padding: 10px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: darkslateblue;
`;
