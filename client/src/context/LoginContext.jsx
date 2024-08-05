import { useEffect, useState } from "react";
import { createUserRerquest, loginRerquest } from "../../api/login";
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])

    const createUser = async (data) => {
        try {
            const res = await createUserRerquest(data);
            console.log(res);
            setUser(data);
        } catch (error) {
            console.error("Error al crear usuario", error);
            setErrors(error.response.data.message)
        }
    };

    const login = async (data) => {
        try {
            const res = await loginRerquest(data);
            if (res) {
                setIsAuthenticated(true);
            }
            setUser(data);
        } catch (error) {
            console.error("Error al iniciar sesión", error);
            setErrors(error.response.data.message)
        }
    };
    useEffect(() => {
        if (errors.length > 0) {
          const timer = setTimeout(() => {
            setErrors([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [errors]);
    

    return (
        <LoginContext.Provider
            value={{
                user,
                createUser,
                login,
                isAuthenticated,
                errors
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

LoginProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
