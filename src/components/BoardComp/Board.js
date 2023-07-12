import React from "react";
import { useState, useEffect } from "react";
// import { getOneBoard } from "../../api/BoardsRequests";
import { getCards } from "../../api/CardsRequests";
// import CardList from "./CardList";
import Card from "./Card";

const Board = ({ boardID }) => {
  const [cards, setCards] = useState([]);

  // const boardRequest = getOneBoard(boardID)

  // const onLikeUpdate = async (id) => {
  //     const cardsRequest = await getCards(id)
  //     setCards(cardsRequest)
  // }
  useEffect(() => {
    if (boardID) {
      const fetch = async () => {
        const c = await getCards(boardID);
        setCards(c);
      };
      fetch();
    }
  }, [boardID]);

  return (
    //display board name
    <ul>
      {cards &&
        cards.map((card) => (
          <Card
            id={card.id}
            message={card.message}
            likesCount={card.likes_count}
          />
        ))}
    </ul>
    // <CardList
    //     cards={boardID.cards}
    // />

    //display board owner
  );
};

export default Board;
