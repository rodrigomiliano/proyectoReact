/*
import React from "react";
import './App.css';

const axios = require('axios');

class App extends React.Component {   

    constructor(props){
        super(props);
        this.state = {consulteApi:false};
    }

  handlerButton(){    
  var nombre = this.state.nombre;
  axios.get("https://www.breakingbadapi.com/api/characters", {params: {name:nombre}})
  .then(response => {   
      console.log(response);   
      this.setState(() => {return {consulteApi:true, data: response.data}});
  })
  .catch(error => {
      console.log(error);
  });

  }  
    
handlerText(event){    
    this.setState({nombre: event.target.value});
}

  render(){
    
    var resultados;
    if(this.state.consulteApi){


        
    resultados = (
        <div>
           {this.state.data[0].name}
        </div>   
    );
    }else{
        resultados = <div></div>
    }

    return (
        <div>
            <div>
            <input onChange={this.handlerText.bind(this)} type="text" placeholder="Nombre del personaje"/>
            <button onClick={this.handlerButton.bind(this)}>Preguntar a API</button>
        </div>
       {resultados}
        </div>
    );          
  }
        
}

  export default App;
  */