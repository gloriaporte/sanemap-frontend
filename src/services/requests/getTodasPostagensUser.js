import api from "../api";

export const getTodasPostagensUser = async (user) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  try {
    const response = await api.get("app/publications?type=me");
    return response;
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};