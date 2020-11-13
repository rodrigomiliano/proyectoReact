import React, { Component } from 'react';
import logo from './iafgot.png';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    response: [],
    estado: null
  };

  handlerText(e){
    var campoTexto = e.target.value;
    this.setState({value : campoTexto});
    //console.log(campoTexto)
  }  

  handlerButton = () => {
    var characters = this.state.value;   
    axios.get( 'https://anapioficeandfire.com/api/characters/' + characters)
        .then( res => {
        console.log(res.data);        
        this.setState({
          response: res.data,
          estado: true
        });
    });

  }


render(){

if(this.state.estado !== true){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="500" />
      <div>
      <form>
        <label>
          <p class="titulo" className="titulo">GAME OF THRONES</p>
          <p class="descripcion">Una API del Juego de Tronos</p>
          <input type="text" name="name" placeholder="Elige numero de 0 a 2000" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar Personaje" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      </header>
    </div>
  );
}else{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="500" />
      <div>
      <form>
        <label>
        <p class="titulo" className="titulo">GAME OF THRONES</p>
        <p class="descripcion">Una API del Juego de Tronos</p>
          <input type="text" name="name" placeholder="Elige numero de 0 a 2000" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar Personaje" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      <div className="App-box">
        <p>Nombre: {this.state.response.name}</p>
        <p>Género: {this.state.response.gender}</p>
        <p>Cultura: {this.state.response.culture}</p>
        <p>Nacimiento: {this.state.response.born}</p>
        <p>Fallecimiento: {this.state.response.died}</p>
        <p>Títulos: {this.state.response.titles}</p>
        <p>Alias: {this.state.response.aliases}</p>
        <p>Padre: {this.state.response.father}</p>
        <p>Madre: {this.state.response.mather}</p>
        <p>Esposo/a: {this.state.response.spouse}</p>
        <p>Actor: {this.state.response.playedBy}</p>        
      </div>
      </header>
    </div>
  );

    }
  }
}
export default App;