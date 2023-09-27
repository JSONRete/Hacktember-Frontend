import { useState, useEffect, createContext, useContext } from 'react'
import { useNavigation } from 'react-router-dom'
import { ErrorContext } from './ErrorProvider';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { setError } = useContext(ErrorContext);

    const handleLogin = () => {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn)
    };

    const updateUser = (user) => {
        setUser(user);
    }

    useEffect(() => {
        const fetchUser = () => {
          fetch("/check_session").then((res) => {
            if (res.ok) {
              res.json().then(setUser);
            } else {
              updateUser(null);
            }
          });
        };
        fetchUser();
      }, [])

    const handleLogoutClick = () => {
        fetch('/logout', { method: 'DELETE'}).then((res) => {
            if (res.ok) {
                updateUser(null);
            }
        })
    }

    const handleRegister = ( values, resetForm, history) => {
        const { email, password} = values;
        const url = isLoggedIn ? '/login' : '/signup';
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then((res) => {
            if(res.ok) {
                res.json().then((res) => {
                    updateUser(res);
                    return true
                })
            } else {
                if (url === '/login') {
                    setError("Incorrect Username or Password")
                } else {
                    setError('A user already exists with those credentials')
                }
            }
        });
    };
    return (
        <UserContext.Provider
        value={{
            handleLogin,
            handleRegister,
            updateUser,
            user,
            handleLogoutClick,
            isLoggedIn,
        }}
        >
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;
export { UserContext }