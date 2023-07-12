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
      <header className="App-header">
        <h1>Inspiration Board</h1>
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
      <footer> Copyright CADA 2023 </footer>
    </div>
  );
}

export default App;
