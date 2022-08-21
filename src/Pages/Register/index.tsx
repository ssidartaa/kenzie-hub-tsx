import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import RegisterForm from "../../components/RegisterForm";
import Link from "../../components/Link";

import Logo from "../../assets/Logo.svg";
import { Container } from "./styles";

const Register = () => {
  const { to } = useContext(AuthContext);

  return (
    <Container>
      <div className="header">
        <img className="logo" src={Logo} alt="Imagem Logo do KenzieHub" />

        <Link className="register" onClick={() => to("")}>
          Voltar
        </Link>
      </div>

      <main className="main">
        <div className="registerInfo">
          <h1 className="title">Crie sua conta</h1>

          <p className="info">Rapido e grátis, vamos nessa</p>
        </div>

        <RegisterForm />
      </main>
    </Container>
  );
};

export default Register;
