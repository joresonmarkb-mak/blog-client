import { createContext, useContext, useState, useEffect, Children } from "react";
import api from '../api/axios'

const AuthContext = createContext();

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');

        if (savedToken && savedUser){
            setToken(savedToken);
            setUser (JSON.parse(savedUser));
            
        }
        setloading(false)
    },[])

    const login = async (email , password) => {
        const response =await api.post('/users/login', {email , password})
        const { token, user} = response.data;

        localStorage.setItem( 'token', token);
        localStorage.setItem ( 'user', JSON.stringify(user) );

        setToken(token);
        setUser(user);
    };

    const logout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )

    
}
export function useAuth(){
        return useContext(AuthContext);
    }