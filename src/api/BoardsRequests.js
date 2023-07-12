import axios from "axios";

export const postBoard = (title, owner) => {
  axios
    .post("https://cada-inspo-board.onrender.com/boards", {
      title: title,
      owner: owner,
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
