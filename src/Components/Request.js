import React from 'react';
import axios from 'axios';
import MainPage from './MainPage';

export default class Request extends React.Component {
    state = {
        dados: {
            body: [1,2,3]
               
            
        },
      }

  async componentDidMount() {
   setInterval(function(){ document.location.reload(true); }, 60000) 
    await axios.get(`https://irkzvvl9m8.execute-api.us-east-1.amazonaws.com/dev/plants?gardenId=1`)
      .then(res => {
       console.log(res.data);

        const dados = res.data;
        
        this.setState({ dados });

      })
  }
  
  render() {
       
    return (
        <React.Fragment>
            {/*console.log(this.state.dados.body[0].id)*/}
            {/* this.state.dados.map(person => <p>{person.id}</p>)*/}
            <MainPage dados={this.state.dados}></MainPage>
        </React.Fragment>
    )
  }
}