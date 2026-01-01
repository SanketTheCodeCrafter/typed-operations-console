import { useState } from "react"
import type { AuthState } from "../types/auth"
import type { User } from "../types/user";
import { AuthContext } from "./AuthContext";



export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [state, setState] = useState<AuthState>({
        status: 'unauthenticated',
    });

    const login = (user: User)=>{
        setState({status: 'authenticated', user})
    }

    const logout=()=>{
        setState({status: 'unauthenticated'})
    }

    return (
        <AuthContext.Provider value={{state, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}