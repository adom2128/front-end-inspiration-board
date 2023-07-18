import React from "react";
import { useState, useEffect } from "react";
import { getCards, postCard } from "../../api/CardsRequests";
import Card from "./Card";
import { deleteOneBoard, getOneBoard } from "../../api/BoardsRequests";
import "./Board.css";
import NewCardForm from "./NewCardForm";

const Board = ({ boardID, refetchBoards }) => {
  const [cards, setCards] = useState([]);
  const [board, setBoard] = useState({});
  const [showForm, setShowForm] = useState(false);

  const refetchCards = async () => {
    const retrievecards = await getCards(boardID);
    setCards(retrievecards);
  };

  const onDelete = () => {
    deleteOneBoard(boardID).then(() => {
      refetchBoards();
      setCards([]);
      setBoard({});
      setShowForm(false);
    });
  };

  useEffect(() => {
    if (boardID) {
      const fetchBoard = async () => {
        const selectedBoard = await getOneBoard(boardID);
        const retrievecards = await getCards(boardID);
        setBoard(selectedBoard);
        setCards(retrievecards);
      };
      fetchBoard();
      setShowForm(true);
    }
  }, [boardID]);

  const onCardFormSubmit = (newCard) => {
    postCard(newCard, boardID).then((response) => {
      setCards((prev) => [...prev, response]);
    });
  };

  return (
    <section className="board">
      <div>
              {Object.keys(board).length > 0 && (
        <button className="delete-board" onClick={onDelete}>
          X
        </button>)}
      </div>

      <h2 className="board-text-title">{board?.title}</h2>
      <div className="board-container">
        <ul className="ul-cards">
          {cards &&
            cards.map((card) => (
              <Card
                id={card.card_id}
                message={card.message}
                likesCount={card.likes_count}
                refetchCards={refetchCards}
              />
            ))}
            {showForm && <NewCardForm onCardFormSubmit={onCardFormSubmit} />}
        </ul>
        
      </div>
      <h2 className="board-text-owner">{board?.owner}</h2>
    </section>
  );
};

export default Board;
