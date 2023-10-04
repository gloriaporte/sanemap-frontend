import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/api";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }
        
        loadStorage();
    }, []);

    async function signIn(usuario, senha) {

        const payload = {
            nome: "Teste",
            email: "teste",
            password: 123
        }

        setError(null);
        setUser(payload);
        storageUser(payload);

        // api.defaults.headers.common["Accept"] = 'application/json';
        // api.defaults.headers.common["Content-type"] = 'application/json';
        // api.post('login', payload).then(
        //     response => {
        //         api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        //         api.get("").
        //         then(
        //             response => {
                      
        //             }
        //         ).catch( error => {
        //             console.log(error.message);
        //         });

        //         setError(null);
        //         setUser(payload);
        //         storageUser(payload);
        //     }
        // ).catch( error => {
        //     if(error.code == "ERR_BAD_REQUEST") {
        //         setError({id: "3", msg: "RM e/ou senha incorretos."});
        //     } else {
        //         setError({id: "3", msg: "Ocorreu um erro, contate o suporte."});
        //     }
        //     console.log(error);
        // });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        setLoading(true);

        await AsyncStorage.clear().then( ()=> {
            api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
            api.post('logout').then(
                response => {
                    setUser(null);
                    setError(null); 
                    setLoading(false);
                }).catch( error => {
                    setError("Houve um erro ao tentar sair, contate o suporte.");
                    setLoading(false);
                });
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
}