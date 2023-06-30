import React from 'react';

const Board = ({ boards }) => {
    return (
        //display board name

        <CardList 
            cards={boards.cards}
        />

        //display board owner
    );
};

export default Board;