import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function FormikChallenge() {
  const formik = useFormik({
    initialValues: {
      nama_lengkap: "",
      email: "",
      password: ""
      // confirm_password: ""
    },
    validationSchema: Yup.object({
      nama_lengkap: Yup.string()
        .min(5, "Mininum 5 characters")
        .max(15, "Maximum 15 characters")
        .required("Wajib Di Isi!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Wajib Di Isi!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Wajib Di Isi!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="App">
      <div>Formik Challenge (counter: 1)</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Nama Lengkap</label>
          <input
            type="text"
            name="nama_lengkap"
            value={formik.values.nama_lengkap}
            onChange={formik.handleChange}
          />
          {formik.errors.nama_lengkap && formik.touched.nama_lengkap && (
            <label>{formik.errors.nama_lengkap}</label>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
