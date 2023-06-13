import React from "react";
import login from "../assets/login.jpg";
import { useFormik } from "formik";
import { signupschema } from "../schemas";

const initialValues = {
  name: "",
  password: "",
  email: "",
  confpassword: "",
};

const Registration = () => {
  const { values, handleBlur,touched, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: signupschema,
    onSubmit: (values,action) => {
      console.log(values);
action.resetForm();
    },
  });

  

  return (
    <div>
      <div className="sign_in">
        <form onSubmit={handleSubmit} className="form_reg">
          <h2>Welcome Folks !</h2>
          <div className="input_box">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name ?  <p className="error_box"> {errors.name}</p> : null}
          </div>
          <div className="input_box">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p className="error_box">{errors.email}</p>:null}
          </div>
          <div className="input_box">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <p className="error_box">{errors.password}</p>:null}
          </div>
          <div className="input_box">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confpassword"
              autoComplete="off"
              value={values.confpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confpassword && touched.confpassword ? <p className="error_box">{errors.confpassword}</p>:null}
          </div>
          <div className="btn_box">
            <span>
              Want to register using <a href="#"> Gmail?</a>{" "}
            </span>
            <button type="submit">Register</button>
          </div>
          <span>
            Already have an Account? <a href="#">Sign in now</a>
          </span>
        </form>
        <div className="img_box">{/* <img src={login} alt="login" /> */}</div>
      </div>
    </div>
  );
};

export default Registration;
