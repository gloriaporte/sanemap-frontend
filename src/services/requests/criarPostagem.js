import api from "../../services/api";

export const criarPostagem = async (user, payload) => {
    try {
        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        const response = await api.post("", payload);
        return response.data;
    } catch(error) {
        console.log(error);
        return [];
    }
}