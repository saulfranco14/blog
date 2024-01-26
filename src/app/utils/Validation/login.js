import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  user_login: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  password_login: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});
