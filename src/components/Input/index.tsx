import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import { Container } from "./styles";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = forwardRef(
  ({ id, label, ...rest }: IInputProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <Container>
        <label className="label" htmlFor={id}>
          {label}
        </label>

        <input className="input" id={id} {...rest} ref={ref} />
      </Container>
    );
  }
);

export default Input;
