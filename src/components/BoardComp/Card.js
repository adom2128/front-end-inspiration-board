import React from "react";
import { putLikeCard, deleteCard } from "../../api/CardsRequests";
import "./Card.css";

const Card = ({ id, message, likesCount, refetchCards }) => {
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

  return (
    <section className="card">
      <button className="delete" onClick={onDelete}>
        X
      </button>
      <p className="text">{message}</p>
      <p className="likesCount">{likesCount}</p>
      <button className="like" onClick={onLike}>
        🤍
      </button>
    </section>
  );
};

export default Card;
