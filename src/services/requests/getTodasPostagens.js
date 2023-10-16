import api from "../api";

export const getTodasPostagens = async (user) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  try {
    const response = await api.get("app/publications");
    return response;
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};