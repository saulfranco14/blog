import React from "react";
import InputField from "@/app/components/Input";
import Header from "@/app/components/Header";
import Button from "@/app/components/Button";
import { validationSchema } from "@/app/utils/Validation/blogEntries";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formFields } from "@/app/utils/Forms/blogEntries";

const BlogEntrie = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crear contenido
              </h1>
              <Formik
                initialValues={{
                  title_blog_entries: "",
                  content_blog_entries: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("Registro con:", values);
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
                    <Button type="submit" text="Crear contenido" />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEntrie;
