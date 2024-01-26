import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import InputField from "@/app/components/Input";
import Header from "@/app/components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login con:", email, password);
  };
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
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Escribe tu email"
                />
                <InputField
                  label="contraseña"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Escribe tu contraseña"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Iniciar Sesión
                </button>
              </form>
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
