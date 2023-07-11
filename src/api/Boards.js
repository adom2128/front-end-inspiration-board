const postBoard = (title, owner) => {
    axios.post('https://cada-inspo-board.onrender.com/boards', 
    {
        "title": title,
        "owner": owner,
    })
    .then((response) => {
        // Code that executes with a successful response goes here
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        // Code that executes with an unsuccessful response goes here
        console.log(error)
        return error
    });
};

const getAllBoards = () => {
    axios.get('https://cada-inspo-board.onrender.com/boards') 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};

const getOneBoard = () => {
    axios.get('https://cada-inspo-board.onrender.com/boards/<board_id>') 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};

const deleteOneBoard = () => {
    axios.get('https://cada-inspo-board.onrender.com/boards/<board_id>') 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};