import React, { useState } from 'react';
import './NewBoardForm.css';

const NewBoardForm = ({ onBoardFormSubmit }) => {

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
        <form className="new-board-form" onSubmit={handleSubmit}>
            <h2>Create New Board</h2>
            <div>        
                <label className="new-board-form-label" htmlFor="newBoardTitle">Title:</label>
                <input type="text" id="newBoardTitle" name="newBoardTitle" onChange={handleBoardTitleChange} value={newBoardTitle} />
            </div>
            <div> 
                {/* <label className="new-board-form-label" htmlFor="newBoardOwner">Owner:</label> */}
                <input type="text" id="newBoardOwner" name="newBoardOwner" onChange={handleBoardOwnerChange} value={newBoardOwner} />
            </div>
            {(newBoardTitle==='' || newBoardOwner==='') && <div className="warning"> Please fill in both fields. </div>}
            <div>
                <input className="new-board-form-btn" type="submit" value="Add Board" disabled={newBoardTitle==='' || newBoardOwner===''}/>
            </div>
        </form>
    );
    
};

// add proptypes

export default NewBoardForm;
