import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import BoardList from './components/BoardList';
import CardList from './components/CardList';



function App() {

  const [boardData, setBoardData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <BoardList 
            boards={boardData}
          />
        </div>
        <div>
          <Board
            boards={boardData}
          />
        </div>
      </main>
      <footer className="App-footer">
        <div>
        &copy; 2023 Alejandra Dominguez, Angie Tran, Cindy Vides, Danica Sarmiento
        </div>
      </footer>
    </div>
  );
};

export default App;
