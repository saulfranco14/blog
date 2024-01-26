import Image from "next/image";
import Link from "next/link";
import React from "react";
import InputField from "@/app/components/Input";
import Header from "@/app/components/Header";
import { validationSchema } from "@/app/utils/Validation/register";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegisterForm = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center items-center mt-6">
              <Link
                href="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <Image
                  className="w-8 h-8 mr-2"
                  src="/images/icon.png"
                  width={48}
                  height={48}
                  alt="icon"
                />
                Grupo Promass
              </Link>
            </div>
            <hr className="border-t-1 border-gray-150" />
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registro
              </h1>
              <Formik
                initialValues={{
                  name_user: "",
                  phone_user: "",
                  email_user: "",
                  password_user: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("Registro con:", values);
                  setSubmitting(false);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="p-2 space-y-4">
                    <Field
                      as={InputField}
                      label="Nombre"
                      name="name_user"
                      placeholder="Escribe tu nombre"
                      error={touched.name_user && errors.name_user}
                    />
                    <ErrorMessage
                      name="name_user"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <Field
                      as={InputField}
                      label="Telefono celular"
                      name="phone_user"
                      placeholder="Escribe tu télefono celular"
                      error={touched.phone_user && errors.phone_user}
                    />
                    <ErrorMessage
                      name="phone_user"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <Field
                      as={InputField}
                      label="Email"
                      type="email"
                      name="email_user"
                      placeholder="Escribe tu email"
                      error={touched.email_user && errors.email_user}
                    />
                    <ErrorMessage
                      name="email_user"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <Field
                      as={InputField}
                      label="Contraseña"
                      type="password"
                      name="password_user"
                      placeholder="Escribe tu contraseña"
                      error={touched.password_user && errors.password_user}
                    />
                    <ErrorMessage
                      name="password_user"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <button
                      type="submit"
                      className="w-full bg-indigo-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Registrarse
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-indigo-600 hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
