import styled from "styled-components";

export const StyledBtn = styled.button`
  padding: 0.5156rem;
  border-radius: 0.2538rem;
  background-color: rgba(var(--Color-primary-Negative), 1);
  transition: 1s;
  cursor: pointer;

  :hover {
    background-color: rgba(var(--Color-primary), 1);
    transition: 1s;
  }
`;
