import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Insira seu nome."),
  email: yup
    .string()
    .required("Insira seu email.")
    .email("Insira um email válido"),
  password: yup
    .string()
    .required("Insira sua senha.")
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial, e conter no mínimo 8 caracteres!"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
  bio: yup.string().required("Insira dados sobre você."),
  contact: yup.string().required("Insira seu meio de contato."),
});

export default schema;
