import api from "../api";

export const registrarUsuario = async (payload) => {
    try {
        // api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        const response = await api.post("register", payload);

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