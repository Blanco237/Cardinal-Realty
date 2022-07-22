import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useDeferredValue,
} from "react";

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
import ErrorModal from "../partials/ErrorModal";
import axios from "axios";

const Register = () => {
  const [gender, setGender] = useState(null);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [level, setLevel] = useState(1);
  const [userErrorComponent, setUserErrorComponent] = useState(null);
  const [emailErrorComponent, setEmailErrorComponent] = useState(null);
  const [errorComponent, setErrorComponent] = useState(null);

  const { updateUser } = useContext(UserContext);

  /*Loading State Component */
  const loadingDiv = (
    <div className="w-12 h-6 flex justify-center">
      <div className="h-6 w-6 rounded-[50%]  border border-l-[3px] border-l-dark-blue animate-spin border-white"></div>
    </div>
  );
  /*End Loading State Component */

  /* DROPZONE PROPS */
  const onDrop = useCallback(async (acceptedFile) => {
    await setPreview(URL.createObjectURL(acceptedFile[0]));
    await setFile(acceptedFile[0]);
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });
  /*END DROPZONE PROPS */

  /* FORM VALIDATION */
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is Required"),
    lname: Yup.string(),
    dateOfBirth: Yup.date().required("Date of Birth is Required"),
    gender: Yup.string(),
    username: Yup.string()
      .min(3, "Too Short")
      .max(15, "Too Long")
      .required("Username is Required"),
    email: Yup.string()
      .email("Enter A valid email address")
      .required("Email is required"),
    password: Yup.string().required("Please Input a Password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });
  /* END FORM VALIDATION */

  /* FORM SUBMIT */
  const initialValues = {
    fname: "",
    lname: "",
    dateOfBirth: "",
    gender: "",
  };

  async function checkUser(defferedUsername) {
    const result = await axios.post(
      "http://localhost:5000/users/check/username",
      { username: defferedUsername }
    );
    if (result.data.success) {
      await setUserErrorComponent(null);
      return true;
    } else {
      await setUserErrorComponent(
        <span className="text-[crimson] text-sm">Username Already Exist</span>
      );
      return false;
    }
  }

  async function checkEmail(defferedEmail) {
    const result = await axios.post("http://localhost:5000/users/check/email", {
      email: defferedEmail,
    });
    if (result.data.success) {
      await setUserErrorComponent(null);
      return true;
    } else {
      await setEmailErrorComponent(
        <span className="text-[crimson] text-sm">Email Already Exist</span>
      );
      return false;
    }
  }

  const uploadImage = async () => {
    // oath8kdu
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "oath8kdu");
    const result = await axios.post(
      "https://api.cloudinary.com/v1_1/blanco237/image/upload",
      formData
    );
    return result.data.secure_url;
  };

  const updateStorage = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
  };

  const handleSubmit = async (data) => {
    await setIsLoading(true);
    const userCheck = await checkUser(data.username);
    const emailCheck = await checkEmail(data.email);
    if ((userCheck && emailCheck) === false) {
      await setIsLoading(false);
      return;
    }
    data.photo = await uploadImage();
    try {
      const result = await axios.post(
        "http://localhost:5000/users/register",
        data
      );
      if (result.data.error) {
        setErrorComponent(
          <ErrorModal
            closeModal={() => setErrorComponent(null)}
            error={result.data.error}
          />
        );
      } else {
        updateStorage(result.data);
        updateUser();
      }
    } catch (err) {
      setErrorComponent(
        <ErrorModal
          closeModal={() => setErrorComponent(null)}
          error={err.message}
        />
      );
    } finally {
      await setIsLoading(false);
    }
  };

  /*END FORM SUBMIT*/

  /*Auxilary Functions*/
  const switchLevel = (e, level) => {
    e.preventDefault();
    setLevel(level);
  };
  /*END Auxilary Functions*/

  return (
    <div
      className={` w-screen h-screen flex flex-col bg-pink-blush relative justify-center items-center`}
    >
      <div className={`${classes.wave} ${classes.wave2} absolute z-0`}></div>
      <div className={` ${classes.bgSvg} flex flex-col items-center gap-0 justify-center md:w-[60%] w-11/12 md:min-h-[27rem] min-h-[32rem] bg-dark-blue shadow-lg rounded-md pt-3 z-10`}>
        <div className="flex flex-row items-center justify-start md:gap-12 gap-4 w-full px-6 py-2 border-b-bubble-gum border-b-2">
          <div className="flex flex-col items-center justify-center w-2/12 ">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <h1 className="text-white text-xl">Registration</h1>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-start gap-0 w-full h-full px-6">
          <div className="md:h-full md:w-1/12 w-full md:border-b-0  md:border-r-2 border-b-2  border-r-bubble-gum flex md:flex-col flex-row gap-6 text-white items-center justify-center md:py-5 py-2 text-3xl">
            <div
              className={`cursor-pointer ${
                level > 0 ? "text-bubble-gum" : "text-white"
              } hover:text-bermuda-faded`}
              onClick={() => setLevel(1)}
            >
              <FaDiceOne />
            </div>
            <div
              className={`cursor-pointer ${
                level > 1 ? "text-bubble-gum" : "text-white"
              } hover:text-bermuda-faded`}
              onClick={() => setLevel(2)}
            >
              <FaDiceTwo />
            </div>
            <div
              className={`cursor-pointer ${
                level > 2 ? "text-bubble-gum" : "text-white"
              } hover:text-bermuda-faded`}
              onClick={() => setLevel(3)}
            >
              <FaDiceThree />
            </div>
          </div>
          <div className="md:px-6 px-1 h-full  w-11/12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className={`w-full relative min-h-[20rem]`}>
                <section
                  className={`${
                    classes.formsection1
                  }  min-h-[20rem] flex flex-col gap-4 items-center md:justify-between justify-start absolute top-0 left-0 ${
                    level === 1 ? classes.show : classes.hide
                  }  w-full`}
                >
                  <h1 className="text-white md:mb-6 mt-4">Personal Information</h1>
                  <div className="flex md:flex-row flex-col justify-center gap-4 items-center ">
                    <div className="flex flex-col items-center justify-center w-full">
                      <Field
                        name="fname"
                        type="text"
                        placeholder="First Name"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                      <ErrorMessage
                        name="fname"
                        component="span"
                        className={`${classes.error} text-[crimson] text-sm`}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                      <Field
                        name="lname"
                        type="text"
                        placeholder="Last Name"
                        className={`h-9 w-[14rem] px-1 rounded-md`}
                      />
                    </div>
                  </div>
                  <div className="flex md:gap-6 gap-0 md:flex-row flex-col items-center justify-end">
                    <label className="text-white  w-[14rem] px-1">
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
                  <div className="flex flex-row justify-around items-center md:mt-4">
                    <div className={`h-9 md:w-[14rem] px-1 rounded-md `}>
                      <label className="text-white h-9 md:w-[14rem]  px-1 rounded-md align-middle text-center">
                        Gender
                      </label>
                    </div>
                    <div
                      className={`h-9 md:w-[14rem] w-[10rem] px-1 rounded-md flex gap-6 justify-center items-center`}
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
                      onClick={(e) => switchLevel(e, 2)}
                    >
                      Next
                    </button>
                  </div>
                </section>
                <section
                  className={`${
                    classes.formsection2
                  }  min-h-[20rem] w-full flex flex-col gap-4 items-center justify-start absolute top-0 left-0 ${
                    level === 2 ? classes.show : classes.hide
                  } `}
                >
                  <h2 className="text-white">Upload Photo</h2>
                  <div
                    {...getRootProps()}
                    className="bg-bubble-gum-faded border-4 border-bubble-gum rounded-md hover:bg-bermuda-faded w-full h-32 flex flex-col justify-center items-center cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop Files Here</p>
                    ) : (
                      <p className="text-center">
                        Drag and Drop Image here, or
                        <br /> Click to select files
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 justify-start items-center w-full mt-4 text-white pb-4">
                    <div className="flex flex-col items-center justify-center w-2/12">
                      <p>Image Preview</p>
                    </div>
                    <div className="object-contain md:w-[8rem] md:h-[8rem] w-[6rem] h-[5rem] overflow-hidden rounded-full grid place-items-center">
                      {preview ? (
                        <img
                          src={preview}
                          alt="preview"
                          className="w-[180rem] rounded-full"
                        />
                      ) : (
                        <p>No Image</p>
                      )}
                    </div>
                    <div className="flex items-center justify-end w-7/12">
                      <button
                        className="px-6 py-2 bg-metal hover:bg-grey-blue transition-colors rounded-md shadow-lg cursor-pointer focus:shadow-sm"
                        onClick={(e) => switchLevel(e, 3)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </section>
                <section
                  className={`${
                    classes.formsection3
                  }  min-h-[20rem] flex flex-col md:gap-4 gap-2 items-center justify-start absolute top-0 left-0 ${
                    level === 3 ? classes.show : classes.hide
                  } w-full `}
                >
                  <h2 className="text-white md:mt-6 mt-2 mb-1">Account Details</h2>
                  <div className="flex md:flex-row flex-col gap-4 w-full px-8 justify-center">
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
                      {userErrorComponent}
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
                      {emailErrorComponent}
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col justify-center items-center w-full md:mt-4 mt-2 gap-4">
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
                  <div className="flex items-center justify-end md:w-7/12">
                    <p className="text-silver opacity-70 md:text-lg text-sm text-center">
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
      {errorComponent}
    </div>
  );
};

export default Register;
