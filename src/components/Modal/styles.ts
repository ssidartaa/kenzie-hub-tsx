import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(var(--Grey-4), 0.8);
  backdrop-filter: blur(0.0625rem);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1s;

  .modalContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
    max-width: 500px;
    margin: 0 auto;
    animation: fadeIn 1s;

    .modalHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.5069rem;
      padding: 0 1rem;
      background-color: rgba(var(--Grey-2), 1);
      border-radius: 0.25rem 0.25rem 0 0;

      .title {
        font-size: 0.7019rem;
      }

      .icon {
        font-size: 1rem;
        cursor: pointer;
      }
    }

    .modalForm {
      background-color: rgba(var(--Grey-3), 1);
      padding: 1.3125rem 1rem 1.5938rem;
      border-radius: 0 0 0.25rem 0.25rem;
      display: flex;
      flex-direction: column;
      gap: 1.3125rem;

      .error {
        font-size: 0.6019rem;
        color: rgba(var(--Negative), 1);
      }

      .formContainer {
        display: flex;
        gap: 1.12rem;
        flex-direction: column;

        .label {
          font-size: 0.6106rem;
          font-weight: 400;

          @media screen and (min-width: 20rem) {
            font-size: 0.7612rem;
          }
        }

        .select {
          background-color: rgba(var(--Grey-2), 1);
          border: 0.0612rem solid rgba(var(--Grey-0), 1);
          border-radius: 0.2005rem;
          padding: 0.5262rem 0.4744rem;
          font-size: 0.8144rem;
          font-weight: 400;
          animation: fadeIn 2s;
          cursor: pointer;
        }

        .techNameContainer {
          background-color: rgba(var(--Grey-2), 1);
          border: 0.0612rem solid transparent;
          border-radius: 0.2005rem;
          padding: 0.5262rem 0.4744rem;
          cursor: not-allowed;

          .techName {
            color: rgba(var(--Grey-1), 1);
            font-size: 0.8144rem;
          }
        }
      }

      .modalButtons {
        display: flex;
        justify-content: space-between;

        .save {
          width: 8.0056rem;
        }

        .delete {
          background-color: rgba(var(--Grey-2), 1);
          width: 4.8969rem;
          height: 2.3981rem;

          :hover {
            background-color: rgba(var(--Grey-1), 1);
          }
        }
      }
    }
  }
`;
