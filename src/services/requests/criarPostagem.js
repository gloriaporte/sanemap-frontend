import api from "../api";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const { user } = useContext(AuthContext);

export const registrarUsuario = async (payload) => {
    try {
        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        const response = await api.post("publications", payload);
        
        return {
            status: response.status,
            message: response.data
        };
    } catch(error) {
        return {
            status: error.response.status,
            message: error.response.data.message
        }
    }
}