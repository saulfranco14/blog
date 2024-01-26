import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title_blog_entries: Yup.string().required(
    "El titulo del blog es obligatorio"
  ),
  content_blog_entries: Yup.string()
    .min(10, "El contenido del blog debe de tener al menos 10 caracteres")
    .required("El contenido es obligatorio"),
});
