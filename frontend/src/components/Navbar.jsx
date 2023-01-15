import styled from "styled-components";

export default function Navbar() {
  return (
    <NavContainer>
      <a href="/" className="site-title">
        home
      </a>
      <a href="/login">login</a>
      <a href="/file">file</a>
      <a href="/survey">survey</a>
      <a href="/controller">controller</a>
      <a href="/spinner">spinner</a>
      <a href="/kanban">kanban</a>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  border: black solid 1px;
`;
