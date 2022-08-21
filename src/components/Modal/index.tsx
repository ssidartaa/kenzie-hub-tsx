import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext, IEdit, ITech } from "../../contexts/AuthContext";
import schema from "../../validations/createTechValidation";

import Input from "../Input";
import Button from "../Button";

import { IoCloseOutline } from "react-icons/io5";

import { Container } from "./styles";

interface IModalId {
  id: string;
}

const Modal = ({ id }: IModalId) => {
  const {
    setIsModalVisible,
    currentTechId,
    techs,
    createTech,
    editTech,
    deleteTech,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({ resolver: yupResolver(schema) });

  const currentTech = techs.find(({ id }) => id === currentTechId);

  const { register: registerEdit, handleSubmit: submitEdit } = useForm<IEdit>({
    defaultValues: currentTech,
  });

  return (
    <Container>
      <div className="modalContent">
        <div className="modalHeader">
          <h3 className="title">
            {id === "modalCreateTech"
              ? "Cadastrar Tecnologia"
              : "Tecnologia Detalhes"}
          </h3>

          <IoCloseOutline
            className="icon"
            onClick={() => setIsModalVisible(false)}
          />
        </div>
        {id === "modalCreateTech" ? (
          <form className="modalForm" onSubmit={handleSubmit(createTech)}>
            <Input
              id={"title"}
              label={"Nome"}
              placeholder={"Nome da Tecnologia"}
              {...register("title")}
            />
            <span className="error">{errors.title?.message}</span>

            <div className="formContainer">
              <label className="label" htmlFor="status">
                Selecionar status
              </label>

              <select className="select" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <Button type="submit">Cadastrar Tecnologia</Button>
          </form>
        ) : (
          <form className="modalForm" onSubmit={submitEdit(editTech)}>
            <div className="formContainer">
              <span className="label">Nome do projeto</span>
              <div className="techNameContainer">
                <span className="techName">{currentTech?.title}</span>
              </div>
            </div>

            <div className="formContainer">
              <label className="label" htmlFor="status">
                Status
              </label>

              <select
                className="select"
                id="status"
                {...registerEdit("status")}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <div className="modalButtons">
              <Button className="save" type="submit">
                Salvar alterações
              </Button>
              <Button className="delete" type="button" onClick={deleteTech}>
                Excluir
              </Button>
            </div>
          </form>
        )}
      </div>
    </Container>
  );
};

export default Modal;
