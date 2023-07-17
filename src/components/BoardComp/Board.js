import React from "react";
import { useState, useEffect } from "react";
import { getCards } from "../../api/CardsRequests";
import Card from "./Card";
import { deleteOneBoard, getOneBoard } from "../../api/BoardsRequests";
import "./Board.css"

const Board = ({ boardID, refetchBoards}) => {

  const [cards, setCards] = useState([]);
  const [board, setBoard] = useState({});

  const refetchCards = async () => {
    const g = await getCards(boardID)
    setCards(g);
  };

  const onDelete = () => {
    deleteOneBoard(boardID).then(() => {
      refetchBoards()
      setCards([])
      setBoard({})
    });
  };

  useEffect(() => {
    if (boardID) {
      const fetch = async () => {
        const c = await getCards(boardID);
        const b = await getOneBoard(boardID);
        setCards(c);
        setBoard(b);
      };
      fetch();
    }
  }, [boardID]);

  return (
    <section className="board">
      {Object.keys(board).length > 0 && <button className="delete" onClick={onDelete}>X</button>}
      <h2>{board?.title}</h2>
      <ul>
        {cards &&
          cards.map((card) => (
            <Card
              id={card.card_id}
              message={card.message}
              likesCount={card.likes_count}
              refetchCards={refetchCards}
            />
          ))}
      </ul>
      <h2>{board?.owner}</h2>
    </section>
  );
};

export default Board;