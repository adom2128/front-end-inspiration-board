import axios from "axios";

export const postBoard = (newBoard) => {
  return axios
    .post("https://cada-inspo-board.onrender.com/boards", newBoard)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getAllBoards = () => {
  const request = axios
    .get("https://cada-inspo-board.onrender.com/boards")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return request;
};

export const getOneBoard = () => {
  axios
    .get("https://cada-inspo-board.onrender.com/boards/<board_id>")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const deleteOneBoard = (id) => {
  axios
    .get(`https://cada-inspo-board.onrender.com/boards/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
