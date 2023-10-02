import { useState, useEffect, createContext, useContext } from 'react'
import { ErrorContext } from './ErrorProvider';

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [movie, setMovie] = useState([])
    const [favorite, setFavorite] = useState([])
    const [course, setCourse] = useState([])
    const { setError } = useContext(ErrorContext);

    const handleMovie = () => {
        setMovie((current) => !current)
    };

    const handleCourse = () => {
        setMovie((current) => !current)
    };

    const addFavorite = (newFavorite) => {
        setFavorite([...newFavorite])
    }

    useEffect(() => {
        const fetchCourses = () => {
          fetch("/course").then((res) => {
            if (res.ok) {
              res.json().then(setCourse);
            } else {
                console.log('No course matching ID')
            }
          });
        }
      }, [])

      useEffect(() => {
        const fetchMovies = () => {
          fetch("/course").then((res) => {
            if (res.ok) {
              res.json().then(setMovie);
            } else {
                console.log('No course matching ID')
            }
          });
        }
      }, [])

    return (
        <ContentContext.Provider
        value={{
            handleMovie,
            handleCourse,
            user,
            movie
        }}
        >
            { children }
        </ContentContext.Provider>
    );
};

export default ContentProvider;
export { ContentContext }