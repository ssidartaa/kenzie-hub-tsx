import { Container } from "./styles";
import { GrTechnology } from "react-icons/gr";

const EmptyTechList = () => {
  return (
    <Container>
      <h3 className="title">Ainda não há tecnologias cadastradas</h3>
      <GrTechnology className="icon" />
    </Container>
  );
};

export default EmptyTechList;
