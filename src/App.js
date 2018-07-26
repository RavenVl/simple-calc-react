import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './components/Screen';
import Oper from './components/Oper';
import Key from './components/Key';
import Equal from './components/Equal';

class App extends Component {
    handleKeyPressNum = (val)=>{
        this.setState((prevState)=>{
            if (prevState.flagOper){
                return {
                    display:val,
                    flagOper: false
                }
            }
            else return {
               display: prevState.display + val
           }
        });
    };
    handleKeyPressC = ()=>{
        this.setState({
            display:'',
            val1:'',
            oper:'',
            flagOper: false
        })
    };
    handleKeyPressOper = (oper)=>{
      this.setState((prevState)=>{
          return{
              oper:oper,
              val1: prevState.display,
              flagOper:true
          }
      })
    };
    handleKeyPressEqual= ()=>{
        this.setState((prevState)=>{
            let rez = 0;
            switch (this.state.oper){
                case '+': rez = parseFloat(prevState.val1)  + parseFloat(prevState.display) ; break;
                case '-': rez = parseFloat(prevState.val1)  - parseFloat(prevState.display) ; break;
                case '*': rez = parseFloat(prevState.val1)  * parseFloat(prevState.display) ; break;
                case '/': rez = parseFloat(prevState.val1)  / parseFloat(prevState.display) ; break;
            }
            return{
                display:rez,
                flagOper:false
            }
        })
    };
    state={
        display: '',
        val1:'',
        oper:'',
        flagOper:false
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <Screen val={this.state.display}/>
                    <div className="opers">
                        <Oper oper={'+'} press={this.handleKeyPressOper}/>
                        <Oper oper={'-'} press={this.handleKeyPressOper}/>
                        <Oper oper={'*'} press={this.handleKeyPressOper}/>
                        <Oper oper={'/'} press={this.handleKeyPressOper}/>
                    </div>
                    <div className="keys">
                       <Key press={this.handleKeyPressNum}>9</Key>
                       <Key press={this.handleKeyPressNum}>8</Key>
                       <Key press={this.handleKeyPressNum}>7</Key>
                       <Key press={this.handleKeyPressNum}>4</Key>
                       <Key press={this.handleKeyPressNum}>5</Key>
                       <Key press={this.handleKeyPressNum}>6</Key>
                       <Key press={this.handleKeyPressNum}>1</Key>
                       <Key press={this.handleKeyPressNum}>2</Key>
                       <Key press={this.handleKeyPressNum}>3</Key>
                       <Key press={this.handleKeyPressNum}>0</Key>
                       <Key press={this.handleKeyPressNum}>.</Key>
                       <Key press={this.handleKeyPressC}>C</Key>
                    </div>
                    <Equal press={this.handleKeyPressEqual}/>
                </div>
            </div>
        );
    }
}

export default App;
