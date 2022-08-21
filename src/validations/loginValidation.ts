import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Insira seu email."),
  password: yup.string().required("Insira sua senha."),
});

export default schema;
