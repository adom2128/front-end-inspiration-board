import React, { useState } from "react";
import NewBoardForm from './NewBoardForm'
import './BoardList.css';

const BoardList = ({ boards, onSelectBoard, onBoardFormSubmit }) => {

  const onSelect = (id) => {
    onSelectBoard(id);
  }; 
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="board__list">
      <ul>
        {boards &&
          boards.map((board) => (
            <li key={board.board_id}>
              <button onClick={() => onSelect(board.board_id)}>
                {board.title}
              </button>
            </li>
          ))
        }
      </ul>
      {showForm && <NewBoardForm onBoardFormSubmit={onBoardFormSubmit} />}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Create New Board'}
      </button>
    </section>
  );
};

export default BoardList;