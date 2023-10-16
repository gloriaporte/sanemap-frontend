import api from "../api";

export const criarPost = async (payload, token) => {
  try {
    const formData = new FormData();
    payload.images.forEach((imagem, index) => {
      formData.append(`images[${index}]`, {
        uri: imagem.uri,
        name: `image-${index}.jpeg`,
        type: "image/jpeg",
      });
    });

    formData.append('description', payload.description);
    formData.append('location', payload.location);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    };

    const response = await api.post("app/publications", formData, config);
    
    return {
      status: response.status,
      message: response.data
    };
  } catch (error) {
    return {
      status: error.response ? error.response.status : 500,
      message: error.response ? error.response.data.message : "Erro desconhecido",
    };
  }
}
