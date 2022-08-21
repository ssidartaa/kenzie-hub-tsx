import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.0625rem auto 1.5rem;
  max-width: 56.25rem;
  animation: fadeIn 1s;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .btn {
    width: 45px;
    height: 2rem;
  }

  @media screen and (min-width: 31.875rem) {
    .btn {
      width: 6.25rem;
      height: 2.5rem;
    }
  }

  .techContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
    margin-bottom: 1.3125rem;
    animation: fadeIn 1s;
  }

  .list {
    margin: 0 1rem 1rem;
  }
`;

export const ContainerFull = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.0625rem solid rgba(var(--Grey-3), 1);
  border-bottom: 0.0625rem solid rgba(var(--Grey-3), 1);

  .header {
    margin: 2.0313rem 1rem 2.2188rem;
    gap: 0.625rem;
    align-items: center;
    animation: fadeIn 1s;
  }

  @media screen and (min-width: 31.875rem) {
    .header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      margin: 2.8125rem auto;
      width: 100%;
    }
  }
`;
