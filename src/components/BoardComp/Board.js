import React from 'react';

const Board = ({ boardID }) => {

    return (
        //display board name

        <CardList 
            cards={boardID.cards}
        />

        //display board owner
    );
};

export default Board;