import React from "react";
import "../CSS/Rect.css";

function Rect(props) {
  console.log(props.label.length);
  return (
    <svg width={props.label.length * 8 + 50} height="40">
      <g id="my-group">
        <rect
          x="10"
          y="13"
          rx="10"
          ry="10"
          width={props.label.length * 8 + 30}
          height="25"
          stroke="black"
          fill="white"
        ></rect>
        <foreignObject
          x="15"
          y="15"
          width={props.label.length * 8 + 50}
          height="40"
        >
          <div
            className="text"
            xmlns="http://www.w3.org/1999/xhtml"
            width="150px"
            style={{ height: "20px" }}
            overflow-y="auto"
          >
            {props.label}
          </div>
        </foreignObject>
      </g>
    </svg>
  );
}
export default Rect;
