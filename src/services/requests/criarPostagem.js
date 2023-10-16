import api from "../api";

export const criarPost = async (payload, token) => {
    try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post("app/publications", payload);
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