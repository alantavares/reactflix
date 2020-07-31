import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Não foi possível obter a lista de categorias =(');
    });
}

export default {
  getAllWithVideos,
};
