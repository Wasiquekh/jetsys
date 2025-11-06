"use client";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ContactFormData = {
  name: string;
  companyName: string;
  designation: string;
  contactNumber: string;
  email: string;
  city: string;
  message: string;
};

export default function OrderNowContactButton() {
  const [open, setOpen] = useState(false);

  // 🔒 Lock body scroll while modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ⌨️ Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    companyName: Yup.string().trim().required("Company Name is required"),
    designation: Yup.string().trim().required("Designation is required"),
    contactNumber: Yup.string()
      .trim()
      .matches(
        /^(?:\+91)?[6-9]\d{9}$/,
        "Enter a valid Indian number (10 digits, optionally +91)"
      )
      .required("Contact Number is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Email Address is required"),
    city: Yup.string().trim().required("City is required"),
    message: Yup.string().trim().required("Your Message is required"),
  });

  const handleSubmit = async (
    values: ContactFormData,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormData>
  ) => {
    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.contactNumber.trim(),
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

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        className: "bg-green-500 text-white",
      });

      resetForm();
      setOpen(false);
    } catch (e) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        className: "bg-red-500 text-white",
      });
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ Your exact trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition block m-auto"
      >
        Order Now
      </button>

      {/* ✅ Responsive Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Dialog: bottom sheet on mobile; centered on ≥sm */}
          <div
            className="
    relative w-full sm:w-[95%] sm:max-w-2xl
    bg-white rounded-2xl shadow-xl
    h-[90dvh] sm:h-auto sm:max-h-[85vh]
    flex flex-col
  "
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white border-b z-10 px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <h2
                  id="contact-modal-title"
                  className="text-lg sm:text-xl font-semibold text-[#5C5649]"
                >
                  Order Now
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded hover:bg-gray-100"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="min-h-0 overflow-y-auto">
              <Formik<ContactFormData>
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
                  <Form className="bg-[#F0EFE9] p-4 sm:p-8">
                    {/* Fields — stack on mobile, comfy spacing */}
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-sm mb-1">Name</p>
                        <Field
                          className="bg-white w-full h-10 rounded outline-none px-3"
                          name="name"
                          type="text"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm mb-1">Company Name</p>
                        <Field
                          className="bg-white w-full h-10 rounded outline-none px-3"
                          name="companyName"
                          type="text"
                        />
                        <ErrorMessage
                          name="companyName"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm mb-1">Designation</p>
                        <Field
                          className="bg-white w-full h-10 rounded outline-none px-3"
                          name="designation"
                          type="text"
                        />
                        <ErrorMessage
                          name="designation"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm mb-1">
                          Contact Number
                        </p>
                        <Field
                          className="bg-white w-full h-10 rounded outline-none px-3"
                          type="tel"
                          name="contactNumber"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const cleaned = e.target.value.replace(
                              /(?!^\+)\D/g,
                              ""
                            );
                            setFieldValue("contactNumber", cleaned);
                          }}
                          maxLength={13}
                        />
                        <ErrorMessage
                          name="contactNumber"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm mb-1">
                          Email Address
                        </p>
                        <Field
                          className="bg-white w-full h-10 rounded outline-none px-3"
                          name="email"
                          type="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm mb-1">City</p>
                        <Field
                          className="bg-white w-full h-10 rounded outline-none px-3"
                          name="city"
                          type="text"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm mb-1">Your Message</p>
                        <Field
                          as="textarea"
                          className="bg-white w-full min-h-28 rounded outline-none px-3 py-2 resize-y"
                          name="message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-600 text-xs mt-1"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-primary hover:bg-[#5f5b00] text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded w-full ${
                          isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "SUBMIT"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}

      {/* Keep here for plug-and-play; remove if you already have one globally */}
      <ToastContainer />
    </>
  );
}
