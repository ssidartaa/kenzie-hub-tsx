import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "../../validations/loginValidation";
import { AuthContext, ILogin } from "../../contexts/AuthContext";

import Input from "../Input";
import InputPassword from "../InputPassword";
import Button from "../Button";

import { Form } from "./styles";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <Input
        id={"email"}
        label={"Email"}
        placeholder={"Digite aqui seu email."}
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <InputPassword
        id={"senha"}
        label={"Senha"}
        placeholder={"Digite aqui sua senha."}
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <Button type="submit">Entrar</Button>
    </Form>
  );
};

export default LoginForm;
