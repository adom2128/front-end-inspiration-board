import axios from "axios";

export const postCard = (message) => {
  axios
    .post("https://cada-inspo-board.onrender.com/boards/<board_id>/cards", {
      message: message,
    })
    .then((response) => {
      // Code that executes with a successful response goes here

      return response.data;
    })
    .catch((error) => {
      // Code that executes with an unsuccessful response goes here
      console.log(error);
      return error;
    });
};

export const getCards = async (id) => {
  const request = await axios
    .get(`https://cada-inspo-board.onrender.com/boards/${id}/cards`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  debugger;
  return request;
};

export const putLikeCard = (id) => {
  axios
    .get(`https://cada-inspo-board.onrender.com/cards/${id}/like`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const deleteCard = () => {
  axios
    .get("https://cada-inspo-board.onrender.com/cards/<card_id>")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
