import React from "react";
import "../CSS/MainPage.css";
//import axios from "axios";
//import Rect from "../Components/Rect";
import Board from "../Components/Board";
import Dashboard from "../Components/Dashboard";
import PlantImage from "./PlantImage";
//import Option from "../Components/Option";



function MainPage(props) {


  
 
  console.log(props.dados.body[2].lumens)
  return (
    <React.Fragment>
      <div className="menu">
          <img className="iconRose" src="https://purepng.com/public/uploads/large/11232131312312-eke.png" alt="icon"></img>
          <h1 className="h1">The Smart Garden</h1>
      </div>
      <div className="mainDiv">
        <br></br>
        
        
       
        
       
        {/* <select>
          {<Option plantId="1"></Option> }
        { }
        </select> */}
        
        {/* <table>
          <tbody>
          <tr>
          {props.dados.body.map(plant => <td>{plant.name}</td>)}
          </tr>
          </tbody> 
        </table>*/}
        <Board plantId="3"/>
        <PlantImage className="plantImage" plantId ="3"></PlantImage>
        <Dashboard statusLampada={props.dados.body[0].lightStatus} umidade={props.dados.body[0].soilHumidity} lumens={props.dados.body[0].lumens}></Dashboard>
      </div>
    </React.Fragment>
  );
}
export default MainPage;
