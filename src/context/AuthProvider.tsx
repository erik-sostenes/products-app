import { Dispatch, SetStateAction, createContext, useState } from "react";

interface AuthProviderProps {
    auth: {},
    setAuth: Dispatch<SetStateAction<{}>>;
}

export const AuthContext = createContext({});

export function AuthProvider({children}: {children: React.ReactNode}) {
     const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}