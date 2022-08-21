import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import Tech from "../Tech";
import EmptyTechList from "../EmptyTechList";

import { Container } from "./styles.js";

const TechList = () => {
  const { setIsModalVisible, setModalId, setCurrentTechId, techs } =
    useContext(AuthContext);

  return (
    <>
      {techs.length > 0 ? (
        <Container>
          {techs.map(({ id, title, status }) => (
            <Tech
              key={id}
              onClick={() => {
                setModalId("modalEditTech");
                setIsModalVisible(true);
                setCurrentTechId(id);
              }}
              title={title}
              status={status}
            />
          ))}
        </Container>
      ) : (
        <EmptyTechList />
      )}
    </>
  );
};

export default TechList;
