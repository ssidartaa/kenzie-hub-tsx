import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import Button from "../../components/Button";
import TechList from "../../components/TechList";
import Modal from "../../components/Modal";

import Logo from "../../assets/Logo.svg";
import { BiPlus } from "react-icons/bi";
import { Container, ContainerFull } from "./styles";

const Dashboard = () => {
  const {
    user,
    logout,
    isModalVisible,
    setIsModalVisible,
    modalId,
    setModalId,
  } = useContext(AuthContext);

  return (
    <>
      <>
        <Container>
          <header className="nav">
            <img className="logo" src={Logo} alt="Imagem Logo do KenzieHub" />

            <Button className={"dashboard"} onClick={logout}>
              Sair
            </Button>
          </header>
        </Container>

        <ContainerFull>
          <Container className="header">
            <h1 className="userName">Olá, {user?.name}</h1>

            <p className="userModule">{user?.course_module}</p>
          </Container>
        </ContainerFull>

        <Container>
          <div className="techContainer">
            <h2 className="title">Tecnologias</h2>

            <Button
              className="techBtn"
              onClick={() => {
                setModalId("modalCreateTech");
                setIsModalVisible(true);
              }}
            >
              <BiPlus className="plus" />
            </Button>
          </div>

          <TechList />
        </Container>
      </>
      {isModalVisible && <Modal id={modalId} />}
    </>
  );
};

export default Dashboard;
