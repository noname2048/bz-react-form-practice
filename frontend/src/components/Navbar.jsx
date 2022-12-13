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
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;
