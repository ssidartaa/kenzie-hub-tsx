import styled from "styled-components";
import "animate.css";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3%;
  padding: 0.7612rem 0.75rem;
  background-color: rgba(var(--Grey-4), 1);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 1s;
  animation: fadeInDown 1.5s;

  :hover {
    background-color: rgba(var(--Grey-2), 1);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3);
    transition: 1s;

    .techStatus {
      color: rgba(var(--Grey-0), 1);
    }
  }

  @media screen and (min-width: 31.875rem) {
    padding: 0.7612rem 1.375rem;
    margin: 0 2%;
  }

  .techTitle {
    font-size: 0.8881rem;
    font-weight: 700;
  }

  .techStatus {
    font-size: 0.7612rem;
    font-weight: 400;
    color: rgba(var(--Grey-1), 1);
  }
`;
