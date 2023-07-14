import axios from "axios";

export const postBoard = async (title, owner) => {
  return axios
    .post("https://cada-inspo-board.onrender.com/boards", {
      title: title,
      owner: owner,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const getAllBoards = async () => {
  return axios
    .get("https://cada-inspo-board.onrender.com/boards")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const getOneBoard = async (id) => {
  return axios
    .get(`https://cada-inspo-board.onrender.com/boards/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const deleteOneBoard = async (id) => {
  return axios
    .delete(`https://cada-inspo-board.onrender.com/boards/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
