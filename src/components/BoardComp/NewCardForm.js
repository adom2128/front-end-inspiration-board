import React, { useState } from 'react';

const NewCardForm = ({ onCardFormSubmit }) => {

    const [newCardMessage, setNewCardMessage] = useState('');

    const handleNewCardMessage = (event) => {
        setNewCardMessage(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const newCard = {
            message: newCardMessage
        };

        onCardFormSubmit(newCard);
        setNewCardMessage('');
    };

    return (
        <form className="new-card-form" onSubmit={handleSubmit}>
            <h2>Add New Card</h2>
            <div>            
                <label className="new-card-form-label" htmlFor="newCardMessage">message</label>
                <input type="text" id="newCardMessage" name="newCardMessage" onChange={handleNewCardMessage} value={newCardMessage} />
            </div>
            <div>
                <input className="new-card-form-btn" type="submit" value="add card" />
            </div>
        </form>
    )
};

export default NewCardForm;