import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import logo from "../assets/images/logo-metal.png";
import { FaMale, FaFemale } from 'react-icons/fa'
import classes from "../assets/styles/views/register.module.css";

const Register = () => {

    const [gender, setGender] = useState(null);    

    useEffect(() => {
      console.log('Gender is '+gender);
    }, [gender]);
    

  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is Required"),
    lName: Yup.string(),
    dateOfBirth: Yup.date().required("Date of Birth is Required"),
    gender: Yup.string(),
  });

  const initialValues = {
    fName: "",
    lName: "",
    dateOfBirth: "",
    gender: "",
  };

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
          <div className="h-full w-1/12 bg-black border-r-2  border-r-bubble-gum"></div>
          <div className="px-6 h-full  w-11/12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form className={`w-full`}>
                <section
                  className={`${classes.formSection}-1  min-h-[20rem] flex flex-col gap-4 items-center justify-between `}
                >
                  <h1 className="text-white mb-6 mt-4">
                    Personal Information
                  </h1>
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
                    <div className={`h-9 w-[14rem] px-1 rounded-md flex gap-6 justify-center items-center`} onChange={(e) => setGender(e.target.value)}>
                      <label className="flex flex-col justify-center items-center cursor-pointer">
                        <Field name="gender" type="radio" value="Male" className={`opacity-0`}/>
                        <i className={`text-3xl ${gender==='Male'? 'text-blue': 'text-white'}`}><FaMale/></i>
                        <span className={`${gender==='Male'? 'text-blue': 'text-white'}`}>Male</span>
                      </label>
                      <label className="flex flex-col justify-center items-center cursor-pointer">
                        <Field name="gender" type="radio" value="Female" className={`opacity-0`}/>
                        <i className={`text-3xl ${gender==='Female'? 'text-pink': 'text-white'}`}><FaFemale/></i>
                        <span className={`${gender==='Female'? 'text-pink': 'text-white'}`}>Female</span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full h-8 mt-7 flex justify-end items-center text-white px-4">
                      <button className="px-6 py-2 bg-metal hover:bg-grey-blue transition-colors rounded-md shadow-lg cursor-pointer focus:shadow-sm" onClick={(e) => e.preventDefault()}> Next </button>
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
