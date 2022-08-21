import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.0625rem auto 1.5rem;
  max-width: 56.25rem;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    animation: fadeInDown 1s;

    .logo {
      width: 6.5956rem;
      height: 0.9144rem;
    }

    .dashboard {
      width: 20%;
      background-color: rgba(var(--Grey-3), 1);

      :hover {
        background-color: rgba(var(--Grey-2), 1);
      }
    }

    @media screen and (min-width: 21.875rem) {
      .dashboard {
        max-width: 5.3125rem;
      }
    }
  }

  .techContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
    margin-bottom: 1.3125rem;
    animation: fadeInDown 1s;

    .title {
      font-size: 1rem;
      font-weight: 600;
    }

    .techBtn {
      padding: 0.3rem 0.3rem 0.09rem;
      background-color: rgba(var(--Grey-3), 1);

      :hover {
        background-color: rgba(var(--Grey-2), 1);
      }

      .plus {
        font-size: 1.2rem;
        font-weight: 700;
        width: fit-content;
        height: fit-content;
      }
    }
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
    animation: fadeInDown 1.5s;
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

  .userName {
    font-size: 1.125rem;
    font-weight: 700;
    max-width: 96%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .userModule {
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(var(--Grey-1), 1);
  }
`;
