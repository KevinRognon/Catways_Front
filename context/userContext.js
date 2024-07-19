"use client";

import {createContext, useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = Cookies.get('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);