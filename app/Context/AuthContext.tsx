'use client'
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthProps {
    children: ReactNode;
}

type AuthContextValue = {
    isLoggedin: boolean;
    setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValue: AuthContextValue = {
    isLoggedin: false,
    setIsLoggedin: () => { },
};

export const AuthContext = createContext<AuthContextValue>(initialValue);

export function AuthProvider({ children }: AuthProps) {
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        const authDataString = sessionStorage.getItem('authData');
        const authData = authDataString ? JSON.parse(authDataString) : null;

        setIsLoggedin(authData !== null && authData !== undefined);
    }, [])

    useEffect(() => {
        if (isLoggedin && window.location.pathname === '/') {
            window.location.href = '/dashboard';
            return;
        }
    }, [isLoggedin])

    return (
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
            {children}
        </AuthContext.Provider>
    );
}
