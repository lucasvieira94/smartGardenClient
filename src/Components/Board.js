import React from "react";
import "../CSS/Board.css";

function Board(props) {
  switch (props.plantId) {
    case "1":
        return (
          <React.Fragment>
            <div className="divImg">
              <h4 className="nomePlanta">Alecrim</h4>
              <p className="textPlant">
              Tenha cuidado para não regar demais, que é um erro comum com o alecrim. Lembre-se de que ele gosta de
              condições secas e precisa de água apenas quando o solo parecer seco ao toque.
              </p>
            </div>
          </React.Fragment>
        );
    case "2":
        return (
          <React.Fragment>
            <div className="divImg">
              <h4 className="nomePlanta">Hortelã</h4>
              <p className="textPlant">
              O cultivo da hortelã é simples. Sua única exigência é ter terra
            úmida e bem adubada, ela cresce tanto à meia sombra quanto no sol
            pleno. Evite cultivá-la em canteiros coletivos: a planta produz
            raízes invasoras e caules subterrâneos que logo escapam do controle.
              </p>
            </div>
          </React.Fragment>
        );
        case "3":
        return (
          <React.Fragment>
            <div className="divImg">
              <h4 className="nomePlanta">Lírio</h4>
              <p className="textPlant">
               O cultivo do Lírio é muito simples, ele não deve ficar exposto ao sol
               e é necessário apenas uma rega por semana. O Lírio não é muito adequado para regiões onde o clima é bem seco.
              </p>
            </div>
          </React.Fragment>
        );
        case "4":
            return (
              <React.Fragment>
                <div className="divImg">
                  <h4 className="nomePlanta">Azaléia</h4>
                  <p className="textPlant">
                  Azaleia no jardim você só vai regar se o tempo seco perdurar mais de uma semana mas,
                  no vaso, regue um pouco cada dia, de manhã cedo.
                  Para que a sua azaleia dê flores todos os anos, faça uma poda de
                 limpeza após as floradas e, nesta época também, faça a adubação com composto bem curtido.
                  </p>
                </div>
              </React.Fragment>
            );
    
    default:
      console.log('Sorry, we are out of ');
  }
  return (
    <React.Fragment>
      <div className="divImg">
        
        <h4 className="nomePlanta">{props.plantName}</h4>
        <p className="textPlant">
          <b>{props.text}</b>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Board;
