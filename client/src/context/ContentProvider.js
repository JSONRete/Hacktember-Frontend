import { useState, useEffect, createContext, useContext } from "react";
import { ErrorContext } from "./ErrorProvider";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [course, setCourse] = useState([]);
  const { setError } = useContext(ErrorContext);

  const handleMovie = () => {
    setMovie((current) => !current);
  };

  const handleCourse = () => {
    setMovie((current) => !current);
  };

  const addFavorite = (newFavorite) => {
    setFavorite([...newFavorite]);
  };

  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then(setCourse)
      .catch((error) => setError(error));
  }, [setError]);

  useEffect(() => {
    fetch("/videos")
      .then((res) => res.json())
      .then(setMovie)
      .catch((error) => setError(error));
  }, [setError]);

  return (
    <ContentContext.Provider
      value={{
        handleMovie,
        handleCourse,
        user,
        movie,
        course,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
export { ContentContext };
