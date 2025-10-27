"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

type ContactFormData = {
  name: string;
  companyName: string;
  designation: string;
  contactNumber: string;
  email: string;
  city: string;
  message: string;
};

const page = () => {
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    companyName: Yup.string().trim().required("Company Name is required"),
    designation: Yup.string().trim().required("Designation is required"),
    // Accepts "+91XXXXXXXXXX" or "XXXXXXXXXX" (10 digits starting 6–9)
    contactNumber: Yup.string()
      .trim()
      .matches(
        /^(?:\+91)?[6-9]\d{9}$/,
        "Enter a valid Indian number (10 digits, optionally prefixed with +91)"
      )
      .required("Contact Number is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Email Address is required"),
    city: Yup.string().trim().required("City is required"),
    message: Yup.string().trim().required("Your Message is required"),
  });

  // Handle form submission
  const handleSubmit = async (
    values: ContactFormData,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormData>
  ) => {
    try {
      const payload = {
        // required
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.contactNumber.trim(), // backend also accepts `phone`
        // optional but useful for email body
        contactNumber: values.contactNumber.trim(),
        companyName: values.companyName.trim(),
        designation: values.designation.trim(),
        city: values.city.trim(),
        message: values.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        className: "bg-green-500 text-white",
      });

      resetForm();
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        className: "bg-red-500 text-white",
      });
    } finally {
      setSubmitting(false);
    }
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
              {({ setFieldValue, isSubmitting }) => (
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
                      className="text-red-600 text-[12px] mt-1"
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
                      className="text-red-600 text-[12px] mt-1"
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
                      className="text-red-600 text-[12px] mt-1"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Contact Number</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="tel"
                      inputMode="tel"
                      name="contactNumber"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        // keep + and digits; remove spaces, -, (), etc.
                        const cleaned = e.target.value.replace(
                          /(?!^\+)\D/g,
                          ""
                        );
                        setFieldValue("contactNumber", cleaned);
                      }}
                      maxLength={13} // +911234567890
                      //placeholder="+911234567890 or 9123456789"
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="div"
                      className="text-red-600 text-[12px] mt-1"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Email Address</p>
                    <Field
                      className="bg-white w-full h-8 rounded outline-none px-2"
                      type="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-[12px] mt-1"
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
                      className="text-red-600 text-[12px] mt-1"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <p className="font-medium text-sm mb-1">Your Message</p>
                    <Field
                      as="textarea"
                      className="bg-white w-full h-24 rounded outline-none px-2 py-2 resize-none align-top"
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 text-[12px] mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded w-full ${
                      isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "SUBMIT"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <ToastContainer />
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
