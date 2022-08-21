import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Insira o nome da tecnologia."),
});

export default schema;
