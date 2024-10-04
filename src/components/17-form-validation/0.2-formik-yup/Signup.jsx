import React from "react";
import styles from "./Signup.module.css";
import * as yup from "yup";
import { useFormik } from "formik";

function capitalizeFirstLetter(message) {
  return message.charAt(0).toUpperCase() + message.slice(1) + ".";
}

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, capitalizeFirstLetter("name must have min 2 characters"))
        .required(capitalizeFirstLetter("name is a required field")),
      email: yup
        .string()
        .email(capitalizeFirstLetter("please enter a valid email"))
        .required(capitalizeFirstLetter("email is a required field")),
      password: yup
        .string()
        .min(6, capitalizeFirstLetter("password must have min 6 characters"))
        .required(capitalizeFirstLetter("password is a required field")),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div className={styles["home-container"]}>
      <h2>Signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Your Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name && (
          <p className={styles["error"]}>{formik.errors.name}</p>
        )}
        <label htmlFor="email">Your Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={styles["error"]}>{formik.errors.email}</p>
        )}
        <label htmlFor="password">Your Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p className={styles["error"]}>{formik.errors.password}</p>
        )}
        <button type="submit" className={styles.submit}>
          Signup Now
        </button>
      </form>
    </div>
  );
}

export default Signup;
