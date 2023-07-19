import React, { useState } from "react";
import { putLikeCard, deleteCard, updateCard } from "../../api/CardsRequests";
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  const handleSave = () => {
    onUpdateCard(editedMessage, id);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedMessage(event.target.value);
  };

  const onUpdateCard = (message, id) => {
    updateCard(message, id).then(() => {
      refetchCards();
    });
  };

  return (
    <section className="card">
      {isEditing ? (
        <textarea
          value={editedMessage}
          onChange={handleInputChange}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
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
