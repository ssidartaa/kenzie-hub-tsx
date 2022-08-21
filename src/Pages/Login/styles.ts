import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1.2119rem;
  margin: 0 0.75rem;
  height: 100vh;

  .logo {
    width: 6.3125rem;
    height: 0.875rem;
    animation: fadeInDownBig 1s;
  }

  @media screen and (min-width: 23.0625rem) {
    .logo {
      width: 9.0038rem;
      height: 1.2481rem;
    }
  }

  .main {
    background-color: rgba(var(--Grey-3), 1);
    padding: 2.1056rem 0.9794rem;
    border-radius: 0.2005rem;
    width: 90%;
    animation: fadeIn 1s;

    gap: 1.1031rem;

    &,
    .loginInfo,
    .registerInfo {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .loginInfo {
      width: 100%;
      gap: 1.4269rem;

      .title {
        font-size: 0.9025rem;
        font-weight: 700;
      }

      @media screen and (min-width: 23.0625rem) {
        .title {
          font-size: 1.125rem;
        }
      }
    }

    .registerInfo {
      gap: 1.1031rem;
      width: 100%;
    }

    .info {
      font-size: 0.6019rem;
      color: rgba(var(--Grey-1), 1);
      font-weight: 600;
    }

    @media screen and (min-width: 23.0625rem) {
      .info {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 23.0625rem) {
    max-width: 23.0625rem;
    margin: 0 auto;
  }
`;
