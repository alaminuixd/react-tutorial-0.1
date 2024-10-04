import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useFormik } from "formik";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
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
        <label htmlFor="email">Your Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">Your Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit" className={styles.submit}>
          Signup Now
        </button>
      </form>
    </div>
  );
}

export default Signup;
