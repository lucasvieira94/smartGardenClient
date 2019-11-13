import React from "react";

function Option (props) {

    switch (props.plantId) {
        case 1:
            return (
                <React.Fragment>
                <option value="alecrim">Alecrim</option>
                </React.Fragment>
              );
              case 2:
                return (
                    <React.Fragment>
                    <option value="hortelã">Hortelã</option>
                    </React.Fragment>
                  );
                  case 3:
                    return (
                        <React.Fragment>
                        <option value="lirio">Lírio</option>
                        </React.Fragment>
                      );
        default:
          console.log('Sorry, we are out of .');
      }
  
 
  
  
}
export default Option;