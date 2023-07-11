const postCard = (message) => {
    axios.post('https://cada-inspo-board.onrender.com/boards/<board_id>/cards', 
    {
        "message": message,
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

const getCardsOfOneBoard = () => {
    axios.get('https://cada-inspo-board.onrender.com/boards/<board_id>/cards') 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};

const putLikeCard = () => {
    axios.get('https://cada-inspo-board.onrender.com/cards/<card_id>/like') 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};

const deleteCard = () => {
    axios.get('https://cada-inspo-board.onrender.com/cards/<card_id>') 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};