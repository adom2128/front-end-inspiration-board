import React, { useState } from 'react';
import './App.css';
import BoardList from './components/BoardComp/BoardListComp/BoardList';
import CardList from './components/BoardComp/CardList';


function App() {

  const [boards, setBoards] = useState([]);
  const [boardData, setBoardData] = useState({});
  const [cards, setCards] = useState([]);


//   const boardRequest = getOneBoard(boardID)

//   const onLikeUpdate = async () => {
//   const cardsRequest = await getCards(boardData.id)
//   setCards(cardsRequest)
// }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div id="sidebar">
          <BoardList 
            displayBoards={displayBoards}
            selectBoard={selectBoard}
            createBoard={newBoard}
            deleteBoard={deleteBoard}
          />
        </div>
        <div id="content">
          <Board
            displayTitle={board.title}
            board={displaycards}
            createCard={newCard}
            likeCard={onLike}
            deleteCard={onDelete}
            displayOwner={board.owner}
          />
        </div>
      </main>
      <footer> Copyright CADA 2023 </footer>
    </div>
  );
};

export default App;
