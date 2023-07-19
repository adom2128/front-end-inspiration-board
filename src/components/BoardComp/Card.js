import React, { useState } from "react";
import { putLikeCard, deleteCard } from "../../api/CardsRequests";
import "./Card.css";

const Card = ({ id, message, likesCount, refetchCards }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const onLike = () => {
    putLikeCard(id).then(() => {
      refetchCards();
    });
  };

  const onDelete = () => {
    deleteCard(id).then(() => {
      refetchCards();
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // call function to update the message in the backend
    // also call setEditedMessage?
  };

  const handleInputChange = (event) => {
    setEditedMessage(event.target.value);
  };

  return (
    <section className="card">
      {isEditing ? (
        <textarea
          value = {editedMessage}
          onChange = {handleInputChange}
          onBlur = {handleSave}
          className="editable-text"
        />
      ) : (
        <p className="text" onClick={handleEdit}>
          {message}
        </p>
      )}
      <button className="delete" onClick={onDelete}>
        X
      </button>
      <p className="likesCount">{likesCount}</p>
      <button className="like" onClick={onLike}>
        🤍
      </button>
    </section>
  );
};

export default Card;
