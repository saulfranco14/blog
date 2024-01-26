import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { validationSchema } from "@/app/utils/Validation/login";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formFields } from "@/app/utils/Forms/login";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fnAuthLogin, fnVerifyLogin } from "@/app/redux/actions/login";
import InputField from "@/app/components/Input";
import Header from "@/app/components/Header";
import Button from "@/app/components/Button";




const Login = () => {

  const dispatch = useDispatch();
  const { loading, login } = useSelector(
    (state) => state.login
  );
  const router = useRouter();


  useEffect(() => {
    // Check if there's a token in the 'login' state or in sessionStorage
    const token = login || sessionStorage.getItem("login");
    console.log("token", token)
    if (token) {
      dispatch(fnVerifyLogin(token))
      router.push("/");
    }
  }, [login]);

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
                Inicio de Sesión
              </h1>
              <Formik
                initialValues={{
                  user_login: "",
                  password_login: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(fnAuthLogin(values));
                  setSubmitting(false);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-4">
                    {formFields.map((field) => (
                      <div key={field.name} className="py-2">
                        <Field
                          as={InputField}
                          label={field.label}
                          name={field.name}
                          placeholder={field.placeholder}
                          type={field.type}
                          error={touched[field.name] && errors[field.name]}
                        />
                        <ErrorMessage
                          name={field.name}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    ))}
                    <Button type="submit" text="Iniciar Sesión" loading={loading.auth} />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/registro"
                className="text-indigo-600 hover:underline"
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
