import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { UserContext } from "../context/UserProvider";
import { ErrorContext } from "../context/ErrorProvider";
import * as yup from "yup";
import Error from 'components/Error.js'

const Register = () => {
  const history = useHistory();
  const { handleRegister, handleLogin, isLoggedIn } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { error } = useContext(ErrorContext)
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

  if (user) {
    return null
  }
  return <div>
  <div>
    <h4>
      Please Login or Signup!
    </h4>

    <form onSubmit={formik.handleSubmit} width="25%">
      <input
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <input
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
        <input
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
      <button 
        variant="contained" 
        color="neutral" 
        type="submit"
        sx={{ mt: 2}}
      >
          {isLoggedIn ? "Login" : "Create"}{" "}
        </button>
    </form>
    <FormControlLabel
      control={<Switch checked={isLoggedIn} onChange={handleLogin} />}
      label={isLoggedIn ? "Need a new account?" : "Already have an account?"}
    />
  </div>
  {error ? <Error /> : <></>}
</div>
};

export default Register;
