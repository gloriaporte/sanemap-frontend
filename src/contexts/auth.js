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

    async function signIn(email, senha) {

        const payload = {
            email: email,
            password: senha
        }

        api.defaults.headers.common["Accept"] = 'application/json';
        api.defaults.headers.common["Content-type"] = 'application/json';
        api.post('login', payload).then(
            response => {
                api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
                api.get("app/profile").
                then(
                    res => {

                        const data = {
                            email: res.data.email,
                            nome: res.data.nome,
                            cpf: res.data.cpf,
                            telefone: res.data.telefone,
                            avatar: res.data.avatar,
                            token: response.data.token
                        };

                        setError(null);
                        setUser(data);
                        storageUser(data);
                    }
                ).catch( error => {
                    setError({id: "3", msg: "Ocorreu um erro, contate o suporte."});
                });
            }
        ).catch( error => {
            if(error.response.status == 401) {
                setError({id: "3", msg: "Credenciais incorretas."});
            } else {
                setError({id: "3", msg: "Ocorreu um erro, contate o suporte."});
            }
        });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify({ ...data, "avatar": "../../assets/PersonPerfil.png"}));
    }

    async function signOut() {
        setLoading(true);
        await AsyncStorage.clear().then( ()=> {
            // api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
            // api.post('logout').then(
            //     response => {
            //         setUser(null);
            //         setError(null); 
            //         setLoading(false);
            //     }).catch( error => {
            //         setError("Houve um erro ao tentar sair, contate o suporte.");
            //         setLoading(false);
            //     });

            setUser(null);
            setError(null); 
            setLoading(false);
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
}