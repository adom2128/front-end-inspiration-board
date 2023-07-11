import React from 'react';

const Card = ({ id, message, likesCount, onLikeUpdate, onDeleteUpdate }) => {
    const onLike = () => {
        putLikeCard(id)
        onLikeUpdate()
    }

    const onDelete = () => {
        onDeleteUpdate()
    }

    return (
        <section className ="card">
            <button className="delete" onClick={onDelete}>X</button>
            <p className="text">{message}</p>
            <p className='likesCount'>{likesCount}</p>
            <button className="like" onClick={onLike}>🤍</button>
        </section>
    );
};

Card.propTypes = {
    //Fill with correct proptypes
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.string.isRequired,
    onLikeUpdate: PropTypes.func,
    onDeleteUpdate: PropTypes.func
  };

export default Card;