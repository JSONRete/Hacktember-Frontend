import React from "react";
import { useContext, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ErrorContext } from "../context/ErrorProvider";

export const Error = () => {
  const { error, setError } = useContext(ErrorContext);
  const [ open, setOpen ] = useState(null);

  useEffect(() => {
    if (error) {
      setOpen(true);
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, setError]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
