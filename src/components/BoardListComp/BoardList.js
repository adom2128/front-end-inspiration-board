import React from "react";
import NewBoardForm from './NewBoardForm'
import './BoardList.css';

const BoardList = ({ boards, onSelectBoard, onBoardFormSubmit }) => {

  const onSelect = (id) => {
    onSelectBoard(id);
  }; 

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
      <NewBoardForm 
        onBoardFormSubmit={onBoardFormSubmit}/>
    </section>
  );
};

export default BoardList;