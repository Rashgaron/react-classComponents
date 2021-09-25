import { Component } from 'react';

class App extends Component {
  state = {
    valor: 3
  }

  //El metodo de render se ejecuta siempre cuando:
  //1. Se crea el componente
  //2. Se actualiza el componente
  //3. Cuando un componente padre se actualiza
  
  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={()=>this.setState({valor: 2})}>Enviar</button>
        <h1>Hola Mundo!</h1>
      </div>
    );
  }
}
export default App;
