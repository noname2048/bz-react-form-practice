import styled from "styled-components";
import Button from "@mui/material/Button";

const KanbanNav = () => {
  return (
    <Container>
      <Button variant="contained">add</Button>
      <Button variant="outlined">save</Button>
    </Container>
  );
};

export default KanbanNav;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  background-color: darkslateblue;
`;
