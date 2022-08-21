import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "../../validations/registerValidation";
import { AuthContext, IRegister } from "../../contexts/AuthContext";

import Input from "../Input";
import InputPassword from "../InputPassword";
import Button from "../Button";

import { Form } from "./styles";

const RegisterForm = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(createUser)}>
      <Input
        id={"name"}
        label={"Nome *"}
        placeholder={"Digite aqui seu nome."}
        {...register("name")}
      />
      <span>{errors.name?.message}</span>

      <Input
        id={"email"}
        label={"Email *"}
        placeholder={"Digite aqui seu email."}
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <InputPassword
        id={"password"}
        label={"Senha *"}
        placeholder={"Digite aqui sua senha."}
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <InputPassword
        id={"confirmPassword"}
        label={"Confirmar Senha *"}
        placeholder={"Digite aqui sua senha."}
        {...register("confirmPassword")}
      />
      <span>{errors.confirmPassword?.message}</span>

      <Input
        id={"bio"}
        label={"Bio *"}
        placeholder={"Fale sobre você"}
        {...register("bio")}
      />
      <span>{errors.bio?.message}</span>

      <Input
        id={"contact"}
        label={"Contato *"}
        placeholder={"Opção de contato"}
        {...register("contact")}
      />
      <span>{errors.contact?.message}</span>

      <label className="label" htmlFor="course_module">
        Selecionar módulo
      </label>
      <select
        className="select"
        id={"course_module"}
        {...register("course_module")}
      >
        <option value="Primeiro módulo (Introdução ao Front-end)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Front-end Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
        <option value="Quinto módulo (FullStack Jr)">Quinto módulo</option>
        <option value="Sexto módulo (Empregabilidade)">Sexto módulo</option>
        <option value="Full-Stack by Kenzie Academy">Ex aluno</option>
      </select>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};

export default RegisterForm;
