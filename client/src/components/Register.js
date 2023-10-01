import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { UserContext } from "../context/UserProvider";
import { ErrorContext } from "../context/ErrorProvider";

import {
  Box,
  Container,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { Error } from "./Error";

const Register = () => {
  const history = useNavigate();
  const { handleRegister, handleLogin, isLoggedIn } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { error } = useContext(ErrorContext);
  const pwRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const registerSchema = Yup.object().shape({
    username: Yup.string().required("Username is Required").min(5).max(30),
    password: Yup.string()
      .required("Password is required")
      .matches(
        pwRegEx,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and on special character."
      ),
  });

  const signSinSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required").min(5).max(30),
    password: Yup.string().required("Password is Required").min(8).max(100),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: isLoggedIn ? registerSchema : signSinSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      const ok = handleRegister(values);
      if (ok) {
        history.push("/");
      }
    },
  });

  if (user) {
    return null;
  }
  return (
    <Container className="mb-5">
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
      <img src="waving-hand.png" alt="hand waving motion" width={300} height={300}/>
        <h4 className="font-display text-6xl mt-5">
        {isLoggedIn ? "Log in to your Account" : "Create your account"}
        </h4>
        <Box component="form" onSubmit={formik.handleSubmit} width="25%" display="flex" flexDirection="column" alignItems="center" marginTop={3}>
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            margin="normal"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="overlay"
          />
          <TextField
            label="Password"
            variant="filled"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <button
            type="submit"
            className="font-display border-2 p-3 mx-auto mt-3 mb-3   "
          >
            {isLoggedIn ? "Login" : "Sign up"}{" "}
          </button>
        </Box>
        <FormControlLabel
          control={<Switch checked={isLoggedIn} onChange={handleLogin} marginBottom="5px"/>}
          label={
            isLoggedIn ? "Don't have an account?" : "Already have an account?"
          }
        />
      </Box>
      {error ? <Error/> : <></>}
    </Container>
  );
};

export default Register;
