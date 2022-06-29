import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "../assets/styles/views/register.module.css";

const Register = () => {
  return (
    <div
      className={`${classes.bgSvg} w-screen h-screen flex flex-col bg-pink-blush justify-center items-center`}
    >
      <div className="flex flex-col items-center gap-4 justify-center w-[30%] min-h-[22rem] bg-dark-blue shadow-lg rounded-md py-3">
        <Formik>
          <Form className={`w-[50%]`}>
            <section className={`${classes.formSection}-1`}>
              <div className="flex flex-row justify-around items-center">
                <div className="flex flex-col items-center justify-center w-full">
                  <Field name="fName" type="text" placeholder="First Name" />
                  <ErrorMessage
                    name="fName"
                    component="div"
                    className={classes.error}
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <Field name="lName" type="text" placeholder="Last Name" />
                  <ErrorMessage
                    name="lName"
                    component="div"
                    className={classes.error}
                  />
                </div>
              </div>
              <Field
                name="dateOfBirth"
                type="date"
                placeholder="Date of Birth"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className={classes.error}
              />
              <div className="flex flex-row justify-around items-center">
                <label>
                  <Field name="gender" type="radio" value="Male" />
                  Male
                </label>
                <label>
                  <Field name="gender" type="radio" value="Female" />
                  Female
                </label>
              </div>
            </section>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
