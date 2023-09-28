import { createContext, useState } from "react";

const ErrorContext = createContext();
const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('');

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
export { ErrorContext };