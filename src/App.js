import React, { useState } from 'react';
import './App.css';
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
          <CardList 
            boards={boardData.cards}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
