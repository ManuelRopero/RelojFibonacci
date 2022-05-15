import React, {component} from 'react';
import ReactDom from 'react-dom';
const root = ReactDom.createRoot(document.getElementById('root'));
class Reloj extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            fibonacci: ""
        }
    }
    componentDidMount(){
        this.timerID = setInterval( () => this.tick(), 1000);

        

    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    buttonCalc(){
        const hora = document.getElementById('reloj');
        console.log(hora);
        console.log("hola");
        fetch('http://localhost:3001/')
        .then(response => response.json())
        .then(data =>{this.setState({fibonacci: data.body})})
        .catch(e => console.log(e));
    }
    render () {

        return(    
        <div>
            <h3 id='reloj'>
                {this.state.date.toLocaleTimeString()}
            </h3>
            <h2>
                {this.state.fibonacci}
            </h2>
            <button onClick={this.buttonCalc}>Calcular</button>    
        </div>
        );
    }
}

root.render(<Reloj />);
export default Reloj;
