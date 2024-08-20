import {createContext, useContext, useState} from "react";

export const authorizationContext = createContext();

export const useAuth = () => useContext(authorizationContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [number, setNumber] = useState(0);

    function login(username, password) {
        if (username === "maxschessler" && password === "password") {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <authorizationContext.Provider value={{ isAuthenticated, setAuthenticated, number, login, logout }}>
            {children}
        </authorizationContext.Provider>
    );
}
