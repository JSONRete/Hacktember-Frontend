import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { UserContext } from "../context/UserProvider";
import { ErrorContext } from "../context/ErrorProvider";

import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
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
    onsubmit: (values, { resetForm }) => {
      resetForm();
      const ok = handleRegister(values);
      if (ok) {
        history("/");
      }
    },
  });

  if (user) {
    return null;
  }
  return (
    <Container>
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Please Login or Signup!
        </Typography>

        <Typography variant="4" gutterBottom></Typography>
        <Box component="form" onSubmit={formik.handleSubmit} width="25%">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
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

          {!isLoggedIn && (
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          )}
          <Button
            variant="contained"
            color="neutral"
            type="submit"
            sx={{ mt: 2 }}
          >
            {isLoggedIn ? "Login" : "Sign up"}{" "}
          </Button>
        </Box>
        <FormControlLabel
          control={<Switch checked={isLoggedIn} onChange={handleLogin} />}
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
