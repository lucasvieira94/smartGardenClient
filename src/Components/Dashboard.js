import React from "react";
import "../CSS/Dashboard.css";
import Rect from "../Components/Rect";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="mainDashboardDiv">
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone ventilador"
            src="https://img.icons8.com/cotton/2x/fan--v2.png"
          ></img>
          <Rect label="Ventilação:"></Rect>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone termometro"
            src="https://i.stack.imgur.com/jGgrE.png"
          ></img>
          <Rect label="Temperatura:"></Rect>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone gota"
            src="https://icons-for-free.com/iconfiles/png/512/bottle+drink+drop+glass+resolutions+water+icon-1320084094734677285.png"
          ></img>
          <Rect label="Umidade:"></Rect>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone lampada"
            src="https://www.clipartwiki.com/clipimg/full/83-835364_office-iconset-vexels-transparent-light-bulb-icon-png.png"
          ></img>
          <Rect label="Luminosidade:"></Rect>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
