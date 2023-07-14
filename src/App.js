import React, { useEffect, useState } from "react";
import Board from "./components/BoardComp/Board";
import BoardList from "./components/BoardListComp/BoardList";
import { getAllBoards } from "./api/BoardsRequests";
import "./App.css";

function App() {
  const [boards, setBoards] = useState([]);
  const [boardID, setBoardID] = useState();

  const onSelectBoard = (id) => {
    setBoardID(id);
  };

  const refetchBoards = () => {
    setBoards(getAllBoards());
  };

  useEffect(() => {
    const fetch = async () => {
      const b = await getAllBoards();
      setBoards(b);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="Inspo__board__text">Inspiration Board</h1>
      </header>
      <main>
        <div id="sidebar">
          <BoardList
            boards={boards}
            onSelectBoard={onSelectBoard}
            refetchBoards={refetchBoards}
          />
        </div>
        <div id="content">
          <Board boardID={boardID} />
        </div>
      </main>
      <footer className="App__footer">
        <div>
        &copy; 2023 Alejandra Dominguez, Angie Tran, Cindy Vides, Danica Sarmiento
        </div>
      </footer>
    </div>
  );
}

export default App;
