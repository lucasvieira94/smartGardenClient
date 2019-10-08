import React from "react";
import "../CSS/MainPage.css";
import axios from "axios";
//import Rect from "../Components/Rect";
import Board from "../Components/Board";
import Dashboard from "../Components/Dashboard";

function require() {
  axios
    .get()
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  return null;
}

function MainPage() {
  require();
  return (
    <React.Fragment>
      <div className="mainDiv">
        <br></br>
        <h1 className="h1">The Smart Garden</h1>

        <Board
          text="O cultivo da hortelã é simples. Sua única exigência é ter terra
            úmida e bem adubada, ela cresce tanto à meia sombra quanto no sol
            pleno. Evite cultivá-la em canteiros coletivos: a planta produz
            raízes invasoras e caules subterrâneos que logo escapam do controle."
        />

        <img
          src="https://purepng.com/public/uploads/large/11232131312312-eke.png"
          alt="Jarro de Planta"
          className="plantImage"
        ></img>
        <Dashboard></Dashboard>
      </div>
    </React.Fragment>
  );
}
export default MainPage;
