import React, { useState } from 'react';
import './NewBoardForm.css';

const NewBoardForm = ({ onBoardFormSubmit}) => {

    const [newBoardTitle, setNewBoardTitle] = useState('');
    const [newBoardOwner, setNewBoardOwner] = useState('');

    const handleBoardTitleChange = (event) => {
        setNewBoardTitle(event.target.value);
    };

    const handleBoardOwnerChange = (event) => {
        setNewBoardOwner(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBoard = {
            title: newBoardTitle,
            owner: newBoardOwner
        };

        onBoardFormSubmit(newBoard);
        setNewBoardOwner('');
        setNewBoardTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Board</h2>
            <div>            
                <label htmlFor="newBoardTitle">Enter title:</label>
                <input type="text" id="newBoardTitle" name="newBoardTitle" onChange={handleBoardTitleChange} value={newBoardTitle} />
            </div>
            <div>
                <label htmlFor="newBoardOwner">Enter owner:</label>
                <input type="text" id="newBoardOwner" name="newBoardOwner" onChange={handleBoardOwnerChange} value={newBoardOwner} />
            </div>
            <div>
                <input type="submit" value="add board" />
            </div>
        </form>
    );
    
};

// add proptypes

export default NewBoardForm;
