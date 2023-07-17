import axios from "axios";

// export const postBoard = (newBoard) => {
//   return axios
//     .post("https://cada-inspo-board.onrender.com/boards", newBoard)
//     .then((response) => response.data)
//     .catch((error) => console.log(error));
// };

export const postBoard = async (newBoard) => {
  try {
    const response = await axios.post("https://cada-inspo-board.onrender.com/boards", newBoard);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBoards = () => {
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
