import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import LoginForm from "../../components/LoginForm";
import Link from "../../components/Link";

import Logo from "../../assets/Logo.svg";
import { Container } from "./styles";
import LoadingPage from "../../components/LoadingPage";

const Login = () => {
  const { to, loading } = useContext(AuthContext);

  return loading ? (
    <LoadingPage />
  ) : (
    <Container>
      <img className="logo" src={Logo} alt="Imagem Logo do KenzieHub" />

      <main className="main">
        <div className="loginInfo">
          <h1 className="title">Login</h1>

          <LoginForm />
        </div>

        <div className="registerInfo">
          <p className="info">Ainda não possui uma conta?</p>

          <Link onClick={() => to("register")}>Cadastre-se</Link>
        </div>
      </main>
    </Container>
  );
};

export default Login;
