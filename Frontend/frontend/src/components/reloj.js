import React, {component} from 'react';
import ReactDom from 'react-dom';
const root = ReactDom.createRoot(document.getElementById('root'));
class Reloj extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //         fibonacci: []
    //     }
    // }
    state = {
        date: new Date(),
        fibonacci: []
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
    fibo() {
        let fibo = [];
        fibo = this.state.fibonacci+","
        return fibo;
    }
    buttonCalc(){
        const hora = document.getElementById('reloj');
        console.log(hora);
        fetch(`http://localhost:3001/${this.state.date}`)
        .then(response => response.json())
        .then(data =>{
            console.log("salida",data);
            this.setState({fibonacci: data.sucFibo})
        })
        .catch(e => console.log(e));
        console.log("Prueba"+this.state.fibonacci);
    }
    render () {
        let contenido = "";
        if (this.state.fibonacci == ""){
                contenido = <p> Presiona el boton para calcular</p>
            
        }else {
            contenido = <text>
                <div className="container">
                    <div className="text-center">
                        <h2> La Sucesion es esta</h2>
                        <h4 className="text-center"> 
                            {
                                this.fibo()
                            }
                        </h4>
                    </div> 
                </div>

            </text>
        }
        return(    
        <div>
            <h3 id='reloj'>
                {this.state.date.toLocaleTimeString()}
            </h3>
            <button onClick={()=> this.buttonCalc()}>Calcular</button>  
            {contenido}
        </div>
        );
    }
}

root.render(<Reloj />);
export default Reloj;
