import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./context/UserProvider";
import ErrorProvider from "./context/ErrorProvider";
import ContentProvider from "./context/ContentProvider";

ReactDOM.render(
  <React.StrictMode>
    <ErrorProvider>
      <ContentProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </ContentProvider>
    </ErrorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
