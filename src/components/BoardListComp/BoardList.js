import React from "react";
import './BoardList.css';

const BoardList = ({ boards, onSelectBoard }) => {

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
    </section>
  );
};

export default BoardList;

// add proptypes
