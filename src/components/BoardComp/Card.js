import React from "react";
import { putLikeCard, deleteCard } from "../../api/CardsRequests";

const Card = ({ id, message, likesCount, refetchCards }) => {

    const onLike = () => {
        putLikeCard(id).then(() => {refetchCards()})
    };

    const onDelete = () => {
        deleteCard(id).then(() => {refetchCards()})
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

// Card.propTypes = {
//     //Fill with correct proptypes
//     id: PropTypes.number.isRequired,
//     message: PropTypes.string.isRequired,
//     likesCount: PropTypes.string.isRequired,
//     onLikeUpdate: PropTypes.func,
//     onDeleteUpdate: PropTypes.func
//   };

export default Card;
