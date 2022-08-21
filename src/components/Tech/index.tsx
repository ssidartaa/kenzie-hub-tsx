import { MouseEventHandler } from "react";
import { Container } from "./styles";

interface ITechProps {
  title: string;
  status: string;
  onClick: MouseEventHandler<HTMLLIElement> | undefined;
}

const Tech = ({ title, status, onClick }: ITechProps) => {
  return (
    <Container onClick={onClick}>
      <h3 className="techTitle">{title}</h3>
      <span className="techStatus">{status}</span>
    </Container>
  );
};

export default Tech;
