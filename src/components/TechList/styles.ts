import styled from "styled-components";
import "animate.css";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem 1rem;
  padding: 1.375rem 0;
  max-height: 27rem;
  background-color: rgba(var(--Grey-3), 1);
  border-radius: 0.25rem;
  overflow-y: scroll;
  animation: fadeInDown 1s;

  ::-webkit-scrollbar {
    width: 0.3125rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(var(--Grey-2), 1);
    border-radius: 1.25rem;
  }
`;
