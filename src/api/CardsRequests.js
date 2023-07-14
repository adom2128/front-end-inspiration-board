import axios from "axios";

export const postCard = async (message) => {
  return axios
    .post("https://cada-inspo-board.onrender.com/boards/<board_id>/cards", {
      message: message,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const getCards = async (id) => {
  return axios
    .get(`https://cada-inspo-board.onrender.com/boards/${id}/cards`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const putLikeCard = async (id) => {
  return axios
    .put(`https://cada-inspo-board.onrender.com/cards/${id}/like`)
    .then((response) => {
    return response.data;
    })
    .catch((error) => {
    console.log(error);
    return error;
    });
};

export const deleteCard = async(id) => {
  return axios
    .delete(`https://cada-inspo-board.onrender.com/cards/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
