import React, {Component} from 'react';
import './App.css';
import Cabecera from './components/header';
import Reloj from './components/reloj';
import Subtitle from './components/subtitle';
class App extends Component {
  render()  {
    return (
      <div className="App">
        <main>
          <Cabecera />
          <Subtitle />
          <Reloj />
        </main>
      </div>
    )
  }

}
export default App;
