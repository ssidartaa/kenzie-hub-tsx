import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 1rem 1rem;
  padding: 0 1rem;
  height: 16rem;
  animation: fadeIn 2s;
  border: 1px solid rgba(var(--Grey-2), 1);
  border-radius: 0.25rem;

  .title {
    font-size: 1rem;
    font-weight: 700;
    color: rgba(var(--Grey-2), 1);
    text-align: center;
    animation: fadeIn 2s;

    @media screen and (min-width: 31.875rem) {
      font-size: 1.2rem;
    }
  }

  .icon {
    font-size: 5rem;

    path {
      stroke: rgba(var(--Grey-2), 1);
    }
  }
`;
