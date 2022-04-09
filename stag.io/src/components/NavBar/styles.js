import styled from "styled-components";

export const NavBar = styled.nav`
  min-width: 350px;
  display: flex;
  position: relative;
  padding: 2rem 0;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: ${({ height }) => height || "1100px"};
  background-color: ${({ theme }) => theme.primary};
`;