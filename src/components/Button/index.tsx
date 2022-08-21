import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledBtn } from "./styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: IButtonProps) => (
  <StyledBtn {...rest}>{children}</StyledBtn>
);

export default Button;
