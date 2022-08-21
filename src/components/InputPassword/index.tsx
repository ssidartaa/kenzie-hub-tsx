import { forwardRef, LegacyRef, useState } from "react";

import { IInputProps } from "../Input";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Container } from "./styles";

const InputPassword = forwardRef(
  ({ id, label, ...rest }: IInputProps, ref: LegacyRef<HTMLInputElement>) => {
    const [type, setType] = useState("password");

    return (
      <Container>
        <label className="label" htmlFor={id}>
          {label}
        </label>

        <div className="inputContainer">
          <input className="input" id={id} type={type} {...rest} ref={ref} />

          {type === "password" ? (
            <FaEyeSlash className="eye" onClick={() => setType("text")} />
          ) : (
            <FaEye className="eye" onClick={() => setType("password")} />
          )}
        </div>
      </Container>
    );
  }
);

export default InputPassword;
