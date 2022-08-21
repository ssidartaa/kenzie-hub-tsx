import styled from "styled-components";

export const Link = styled.button`
  width: 100%;
  text-align: center;
  padding: 0.5156rem;
  border-radius: 0.25rem;
  font-size: 0.8019rem;
  font-weight: 500;
  cursor: pointer;
  transition: 1s;
  background-color: rgba(var(--Grey-2), 1);

  :hover {
    transition: 1s;
    background-color: rgba(var(--Grey-1), 1);
  }
`;
