import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9763rem;
  margin: 3.5906rem 1rem;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 6.0994rem;
      height: 1.0562rem;
    }

    @media screen and (min-width: 23.0625rem) {
      .logo {
        width: 7.6288rem;
        height: 1.3256rem;
      }
    }

    .register {
      width: 30%;
      background-color: rgba(var(--Grey-3), 1);

      :hover {
        transition: 1s;
        background-color: rgba(var(--Grey-2), 1);
      }
    }
  }

  .main {
    background-color: rgba(var(--Grey-3), 1);
    padding: 2.0987rem 1.0125rem 1.2475rem;
    border-radius: 0.1999rem;
    display: flex;
    flex-direction: column;
    gap: 1.4219rem;

    .registerInfo {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1.0994rem;

      .title {
        font-size: 0.8994rem;
        font-weight: 700;
      }

      .info {
        font-size: 0.5994rem;
        font-weight: 400;
        color: rgba(var(--Grey-1), 1);
      }

      @media screen and (min-width: 23.0625rem) {
        .title {
          font-size: 1.125rem;
        }
        .info {
          font-size: 0.75rem;
        }
      }
    }
  }

  @media screen and (min-width: 20rem) {
    .register {
      max-width: 5.3125rem;
    }
  }

  @media screen and (min-width: 23.0625rem) {
    max-width: 23.0625rem;
    margin: 3.5906rem auto;
  }
`;
