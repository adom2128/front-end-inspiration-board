import React from "react";

const BoardList = ({ boards, onSelectBoard }) => {

  const onSelect = (id) => {
    onSelectBoard(id);
  };

  return (
    <section>
      <ul>
        {boards &&
          boards.map((board) => (
            <li onClick={() => onSelect(board.board_id)}>{board.title}</li>
          ))
        }
      </ul>
    </section>
  );
};

export default BoardList;

// add proptypes
