import React,{useState , useEffect ,Component} from 'react';
import * as imports from './components/index';
import {GameProvider} from './components/GameContext';

//const categorie='18';
//const API_URL = `https://opentdb.com/api.php?amount=10&category=${categorie}&difficulty=easy&type=multiple`;

class  App extends Component {
state={
  start: true 
}
render(){
  const buttonText = this.state.start ? "Start The game" : "Go to main menu" ;
  const mainSwitch = this.state.start ? ( <imports.GameForm /> 
  ) : (
   <imports.GameLogic />
  )
return (
  <GameProvider>

    {mainSwitch}
    <button className="flex bg-red-200 text-purple-800 p-10  m-6 rounded-lg shadow-md text-2xl min-w-full justify-center" onClick={() => {this.setState({start : !this.state.start})}} >{buttonText}</button>

    
    {/* <imports.GameForm />  */}
    {/* <imports.GameLogic /> */}
  </GameProvider>)
}
};


export default App;
