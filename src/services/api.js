import axios from "axios";

const api = axios.create({
    baseURL: "https://sanemap.phabloraylan.com/"
});

export default api;