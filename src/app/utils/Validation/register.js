import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name_user: Yup.string().required("El nombre es obligatorio"),
  phone_user: Yup.string()
    .matches(/^[0-9]+$/, "Solo números")
    .required("El teléfono es obligatorio"),
  email_user: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  password_user: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});
