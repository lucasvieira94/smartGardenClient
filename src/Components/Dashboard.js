import React from "react";
import "../CSS/Dashboard.css";
//import Rect from "../Components/Rect";

function Dashboard(props) {
  return (
    <React.Fragment>
      <div className="mainDashboardDiv">
        {/* <div id="innerDiv">
          <img
            id="icon"
            alt="icone ventilador"
            src="https://img.icons8.com/cotton/2x/fan--v2.png"
          ></img>
          <Rect label="Ventilação:"></Rect>
        </div>  */}
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone termometro"
            src="https://www.arlgroup.com.au/wp-content/uploads/2017/08/Soil-Icon-Colour.png"
          ></img>
          <p className="dash">Situação do Solo: {props.soloOk}</p>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone termometro"
            src="https://icon-library.net/images/wind-icon/wind-icon-4.jpg"
          ></img>
          <p className="dash">Umidade do Ar: {props.air} %</p>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone termometro"
            src="https://cdn.icon-icons.com/icons2/961/PNG/512/bulb_icon-icons.com_74600.png"
          ></img>
          <p className="dash">Lâmpada: {props.lampada}</p>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone termometro"
            src="https://i.stack.imgur.com/jGgrE.png"
          ></img>
          <p className="dash">Temperatura: {props.temperatura} C</p>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone gota"
            src="https://icons-for-free.com/iconfiles/png/512/bottle+drink+drop+glass+resolutions+water+icon-1320084094734677285.png"
          ></img>
          <p className="dash">Umidade do Solo: {props.umidade}</p>
        </div>
        <div id="innerDiv">
          <img
            id="icon"
            alt="icone lampada"
            src="https://www.clipartwiki.com/clipimg/full/83-835364_office-iconset-vexels-transparent-light-bulb-icon-png.png"
          ></img>
          <p className="dash">Luminosidade: {props.lumens} L</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
