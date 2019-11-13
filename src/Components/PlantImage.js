import React from "react";
import "../CSS/PlantImage.css";

function PlantImage(props) {
  switch (props.plantId) {
    case "1":
      return (
        <React.Fragment>
          <div id="divPrincipal">
            <img
              src="https://www.thegardenstore.sg/image/cache/catalog/products/Plant/Rosemary-910x1155.png"
              alt="Alecrim"
              className="plantImage"
            ></img>
          </div>
        </React.Fragment>
      );
    case "2":
      return (
        <React.Fragment>
          <div id="divPrincipal">
            <img
              src="https://www.thegardenstore.sg/image/cache/catalog/products/Plant/Rosemary-910x1155.png"
              alt="Hortelã"
              className="plantImage"
            ></img>
          </div>
        </React.Fragment>
      );
    case "3":
      return (
        <React.Fragment>
          <div id="divPrincipal">
            <img
              src="https://db1736767dbd5e7094bb-d61bbc5d0b342a54145a236e2d5d1ebf.ssl.cf4.rackcdn.com/Product-800x800/9782b6a3-5cc8-4bd3-b124-961263a63529.png"
              alt="Lírio"
              className="plantImage"
            ></img>
          </div>
        </React.Fragment>
      );
    case "4":
      return (
        <React.Fragment>
          <div id="divPrincipal">
            <img
              src="https://cdn11.bigcommerce.com/s-jmzfi5zcr2/products/799/images/3848/Autumn_Carnival_Encore_Azalea_in_Branded_Pot_Main__58324.1553568083.500.750.png?c=2"
              alt="Azaléia"
              className="plantImage"
            ></img>
          </div>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <div id="divPrincipal">
            <img
              src="http://giphygifs.s3.amazonaws.com/media/d5LR1cNJ4vkME/giphy.gif"
              alt="Jarro de Planta"
              className="plantImage"
            ></img>
          </div>
        </React.Fragment>
      );
  }
}

export default PlantImage;
