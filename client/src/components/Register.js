import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { UserContext } from "";
import * as yup from "yup";

const Register = () => {
  const history = useHistory();
  const { handleRegister, handleLogin, isLogged } = useContext(UserContext);
  const { user } = UserContext(UserContext);
  const pwRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const registerSchema = yup.object().shape({
    username: yup.string().required("Username is Required").min(5).max(30),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        pwRegEx,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and on special character."
      ),
  });

  const signSinSchema = yup.object().shape({
    username: yup.string().required("Username is Required").min(5).max(30),
    password: yup.string().required("Password is Required").min(8).max(100),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: isLoggedIn ? registerSchema : signSinSchema,
    onsubmit: (values, { resetForm }) => {
      resetForm();
      const ok = handleRegister(values);
      if (ok) {
        history.push("/");
      }
    },
  });
  return <div>Register</div>;
};

export default Register;
