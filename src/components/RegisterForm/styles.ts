import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .input,
  .inputContainer {
    border: none;
  }

  .label {
    font-size: 0.6106rem;
    font-weight: 400;
  }

  .select {
    padding: 0.5262rem 0.4744rem;
    background-color: rgba(var(--Grey-2), 1);
    border: 0.0625rem solid rgba(var(--Grey-2), 1);
  }

  span {
    font-size: 0.6106rem;
    font-weight: 400;
    color: rgba(var(--Negative), 1);
  }
`;
