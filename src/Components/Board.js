import React from "react";
import "../CSS/Board.css";

function Board(props) {
  return (
    <React.Fragment>
      <div className="divImg">
        <img
          src="https://www.dezignwithaz.com/images/frame_white.png"
          alt="board"
          className="board border"
        ></img>
        <img
          className="board"
          alt="board"
          src="https://www.dezignwithaz.com/images/frame_white2.png"
        ></img>
        <h3 className="board nomePlanta">Hortelã</h3>
        <p className="textPlant">
          <b>{props.text}</b>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Board;
