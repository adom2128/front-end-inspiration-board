import React from "react";
import NewBoardForm from './NewBoardForm'
// import { deleteOneBoard } from "../../api/BoardsRequests";

const BoardList = ({ boards, onSelectBoard, refetchBoards, onBoardFormSubmit }) => {
  //   const onDelete = (id) => {
  //     deleteOneBoard().then(() => {
  //       refetchBoards();
  //     });
  //   };
  const onSelect = (id) => {
    onSelectBoard(id);
  };

  return (
    <section>
      <ul>
        {boards &&
          boards.map((board) => (
            <li onClick={() => onSelect(board.board_id)}>{board.title}</li>
          ))}
        ;
      </ul>
      <NewBoardForm 
            onBoardFormSubmit={onBoardFormSubmit}/>
    </section>
  );
};

export default BoardList;

// add proptypes
