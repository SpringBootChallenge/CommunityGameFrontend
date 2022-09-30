import React, { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import authService from "../services/Auth/authService";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

function useAuthProvider() {
    let [user, setUser] = useState(authService.getCurrentUser());

    const login = (username, password, onSuccess, onError) => {
        return authService
            .login(
                username,
                password,
                (userInfo) => {
                    console.log('User info:', userInfo);
                    setUser(userInfo);
                    onSuccess(userInfo);
                },
                onError);
    };

    const logout = () => {

    };

    const register = (username, email, password, onSuccess, onError) => {
        return authService
            .register(
                username,
                email,
                password,
                (userInfo) => {
                    console.log('User info:', userInfo); 
                    onSuccess(userInfo); 
                },
                onError); 
    };

    return { user, login, logout, register };
}

export function AuthProvider({ children }) {
    const auth = useAuthProvider();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}