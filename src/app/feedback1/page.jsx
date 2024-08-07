"use client";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Make it long")
    .max(50, "Too Long!")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(/[a-z]/, "must include lowercase")
    .matches(/[A-Z]/, "must include uppercase")
    .matches(/[0-9]/, "must contain a number")
    .matches(/\W/, "must contain a special characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password does not match"
  ),
});

const Feedback = () => {
  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      // send values to backend
      // setTimeout(() => {
      //   resetForm();
      // }, 3000);

      //making request on backend to save data
      //u can use either fetch or axios but in thiscase we use axios
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("User Registered Successfully ");
          router.push("./login");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.code === 11000) {
            toast.error("Email already exist");
          }
          setSubmitting(false);
        });
    },
    validationSchema: SignupSchema,
  });
  return (
    <>
      <div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-black">
                Post a comment
              </h2>
            </div>
            {/* Card */}
            <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
              <form>
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="hs-feedback-post-comment-name-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="hs-feedback-post-comment-name-1"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="hs-feedback-post-comment-email-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="hs-feedback-post-comment-email-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-feedback-post-comment-textarea-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Comment
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="hs-feedback-post-comment-textarea-1"
                      name="hs-feedback-post-comment-textarea-1"
                      rows={3}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Leave your comment here..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
      {/* End Comment Form */}
    </>
  );
};

export default Feedback;
