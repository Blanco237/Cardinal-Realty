import React, { useState, useEffect, useCallback, useContext } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";

import logo from "../assets/images/logo-metal.png";
import {
  FaMale,
  FaFemale,
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
} from "react-icons/fa";
import classes from "../assets/styles/views/register.module.css";

import { UserContext } from "../UserContext";

const Register = () => {
  const [gender, setGender] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [level, setLevel] = useState(1);
  const { updateUser } = useContext(UserContext);

  const loadingDiv = (
    <div className="w-12 h-6 flex justify-center">
      <div className="h-6 w-6 rounded-[50%]  border border-l-[3px] border-l-dark-blue animate-spin border-white"></div>
    </div>
  );

  /* DROPZONE PROPS */
  const onDrop = useCallback(async (acceptedFile) => {
    await setPreview(URL.createObjectURL(acceptedFile[0]));
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  /*END DROPZONE PROPS */

  /* FORM VALIDATION */
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is Required"),
    lName: Yup.string(),
    dateOfBirth: Yup.date().required("Date of Birth is Required"),
    gender: Yup.string(),
    username: Yup.string().min(3).max(15).required("Username is Required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });
  /* END FORM VALIDATION */

  /* FORM SUBMIT */
  const initialValues = {
    fName: "",
    lName: "",
    dateOfBirth: "",
    gender: "",
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (data) => {
    await setIsLoading(true);
    await sleep(1500);
    console.log(data);
    await setIsLoading(false);
  };
  /*END FORM SUBMIT*/

  return (
    <div
      className={`${classes.bgSvg} w-screen h-screen flex flex-col bg-pink-blush justify-center items-center`}
    >
      <div className="flex flex-col items-center gap-0 justify-center w-[60%] min-h-[27rem] bg-dark-blue shadow-lg rounded-md pt-3">
        <div className="flex flex-row items-center justify-start gap-12 w-full  px-6 py-2 border-b-bubble-gum border-b-2">
          <div className="flex flex-col items-center justify-center w-2/12 ">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <h1 className="text-white text-xl">Registration</h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-0 w-full h-full px-6">
          <div className="h-full w-1/12  border-r-2  border-r-bubble-gum flex flex-col gap-6 text-white items-center py-5 text-3xl">
          <div className={`cursor-pointer ${level > 0? 'text-bubble-gum' : 'text-white'}`} onClick={() => setLevel(1)}>
              <FaDiceOne />
            </div>
            <div className={`cursor-pointer ${level > 1? 'text-bubble-gum' : 'text-white'}`} onClick={() => setLevel(2)}>
              <FaDiceTwo />
            </div>
            <div className={`cursor-pointer ${level > 2? 'text-bubble-gum' : 'text-white'}`} onClick={() => setLevel(3)}>
              <FaDiceThree />
            </div>
          </div>
          <div className="px-6 h-full  w-11/12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className={`w-full`}>
                <section
                  className={`${classes.formsection1}  min-h-[20rem] flex flex-col gap-4 items-center justify-between `}
                >
                  <h1 className="text-white mb-6 mt-4">Personal Information</h1>
                  <div className="flex flex-row justify-center gap-4 items-center ">
                    <div className="flex flex-col items-center justify-center w-full">
                      <Field
                        name="fName"
                        type="text"
                        placeholder="First Name"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="fName"
                        component="span"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                      <Field
                        name="lName"
                        type="text"
                        placeholder="Last Name"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                    </div>
                  </div>
                  <div className="flex gap-6 items-center justify-end">
                    <label className="text-white  w-[14rem] px-1 rounded-md">
                      Date Of Birth
                    </label>
                    <div className="flex flex-col">
                      <Field
                        name="dateOfBirth"
                        type="date"
                        placeholder="Date of Birth"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="dateOfBirth"
                        component="div"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-around items-center mt-4">
                    <div className={`h-9 w-[14rem] px-1 rounded-md `}>
                      <label className="text-white h-9 w-[14rem] px-1 rounded-md align-middle text-center">
                        Gender
                      </label>
                    </div>
                    <div
                      className={`h-9 w-[14rem] px-1 rounded-md flex gap-6 justify-center items-center`}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <label className="flex flex-col justify-center items-center cursor-pointer">
                        <Field
                          name="gender"
                          type="radio"
                          value="Male"
                          className={`opacity-0`}
                        />
                        <i
                          className={`text-3xl ${
                            gender === "Male" ? "text-blue" : "text-white"
                          }`}
                        >
                          <FaMale />
                        </i>
                        <span
                          className={`${
                            gender === "Male" ? "text-blue" : "text-white"
                          }`}
                        >
                          Male
                        </span>
                      </label>
                      <label className="flex flex-col justify-center items-center cursor-pointer">
                        <Field
                          name="gender"
                          type="radio"
                          value="Female"
                          className={`opacity-0`}
                        />
                        <i
                          className={`text-3xl ${
                            gender === "Female" ? "text-pink" : "text-white"
                          }`}
                        >
                          <FaFemale />
                        </i>
                        <span
                          className={`${
                            gender === "Female" ? "text-pink" : "text-white"
                          }`}
                        >
                          Female
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full h-8 mt-7 flex justify-end items-center text-white px-4">
                    <button
                      className="px-6 py-2 bg-metal hover:bg-grey-blue transition-colors rounded-md shadow-lg cursor-pointer focus:shadow-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      Next
                    </button>
                  </div>
                </section>
                <section
                  className={`${classes.formsection2}  min-h-[20rem] flex flex-col gap-4 items-center justify-start `}
                >
                  <h2 className="text-white">Upload Photo</h2>
                  <div
                    {...getRootProps()}
                    className="bg-bubble-gum-faded border-4 border-bubble-gum rounded-md hover:bg-bermuda-faded w-full h-48 flex flex-col justify-center items-center cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop Files Here</p>
                    ) : (
                      <p>
                        Drag and Drop Image here, or
                        <br /> Click to select files
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 justify-start items-center w-full mt-4 text-white pb-4">
                    <div className="flex flex-col items-center justify-center w-2/12">
                      <p>Image Preview</p>
                    </div>
                    <div className="object-contain w-[8rem] h-[8rem] overflow-hidden rounded-[50%] grid place-items-center">
                      {preview ? (
                        <img
                          src={preview}
                          alt="preview"
                          className="w-full object-contain"
                        />
                      ) : (
                        <p>No Image</p>
                      )}
                    </div>
                    <div className="flex items-center justify-end w-7/12">
                      <button
                        className="px-6 py-2 bg-metal hover:bg-grey-blue transition-colors rounded-md shadow-lg cursor-pointer focus:shadow-sm"
                        onClick={(e) => e.preventDefault()}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </section>
                <section
                  className={`${classes.formsection3}  min-h-[20rem] flex flex-col gap-4 items-center justify-start `}
                >
                  <h2 className="text-white mt-6">Account Details</h2>
                  <div className="flex gap-4 w-full px-8 justify-center">
                    <div className="flex flex-col items-center justify-start">
                      <Field
                        name="username"
                        type="text"
                        placeholder="Username"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="username"
                        component="span"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-4 gap-4">
                    <div className="flex flex-col items-center justify-start">
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="span"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end w-7/12">
                    <p className="text-silver opacity-70">
                      <span className="text-[red]">*</span> Ensure All
                      Information Submitted on this form is correct and up to
                      date
                    </p>
                  </div>
                  <div className="flex items-center justify-end w-10/12 mt-5">
                    <button
                      className="px-6 py-2 bg-metal hover:bg-grey-blue transition-colors rounded-md shadow-lg cursor-pointer focus:shadow-sm"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? loadingDiv : <p>Register</p>}
                    </button>
                  </div>
                </section>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
