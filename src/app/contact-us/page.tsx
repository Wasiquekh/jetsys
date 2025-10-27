"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export interface ContactFormData {
  name: string;
  companyName: string;
  designation: string;
  contactNumber: string;
  email: string;
  city: string;
  message: string;
}

const page = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    designation: Yup.string().required("Designation is required"),
    contactNumber: Yup.string()
      .matches(
        /^(?:\+91[\s]?)?[789]\d{9}$/,
        "Enter a valid contact number starting with +91 or without it"
      )
      .required("Contact Number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email Address is required"),
    city: Yup.string().required("City is required"),
    message: Yup.string().required("Your Message is required"),
  });

  // Handle form submission
  const handleSubmit = (values: ContactFormData) => {
    console.log("form values", values);
  };

  return (
    <div>
      <Header />
      <section className=" relative">
        <div className="container">
          <div className=" grid grid-cols-2 gap-30 items-center">
            <div>
              <h1 className=" text-6xl font-bold text-[#5C5649]">
                Take the First Step Toward Innovation with Jetsys Defence.
              </h1>
              <div className=" bg-[#E9DCB4] mt-10 p-7">
                <p className=" text-2xl font-medium mb-5">
                  Want to join our Team?
                </p>
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded ">
                  Know More
                </button>
              </div>
            </div>
            <Formik
              initialValues={{
                name: "",
                companyName: "",
                designation: "",
                contactNumber: "",
                email: "",
                city: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form className="bg-[#F0EFE9] p-8">
                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Name</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="text"
                      name="name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-14"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Company Name</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="text"
                      name="companyName"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-14"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Designation</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="text"
                      name="designation"
                    />
                    <ErrorMessage
                      name="designation"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-14"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Contact Number</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="text"
                      name="contactNumber"
                      onChange={(e: React.ChangeEvent<any>) => {
                        // Remove spaces from the contact number
                        setFieldValue(
                          "contactNumber",
                          e.target.value.replace(/\s+/g, "")
                        );
                      }}
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-14"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Email Address</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="text"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-14"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">City</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="text"
                      name="city"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-14"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Your Message</p>
                    <Field
                      as="textarea"
                      className="bg-white w-full h-16 rounded outline-none px-2 py-2 resize-none align-top"
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 text-[12px] absolute top-22"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded w-full"
                  >
                    SUBMIT
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <Image
          src="/images/desgin-top-left.svg"
          width={200}
          height={200}
          alt="Picture of the author"
          className=" absolute top-0 left-0 -z-10"
        />

        <Image
          src="/images/design-bottm-right.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className=" absolute bottom-0 right-0 -z-10"
        />
      </section>
      <Footer />
    </div>
  );
};

export default page;
