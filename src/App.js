import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import React, { useReducer } from 'react';

  function add (a,b){
    let currVal=a
    currVal+=b
    return currVal
  }
  
  function sub (a,b){
    let currVal=a
    currVal-=b
    return currVal
  }

  function mult (a,b){
    let currVal=a
    currVal*=b
    return currVal
  }

  function div (a,b){
    let currVal=a
    currVal/=b
    return currVal
  }




  function input (str) {
    
  let re = /(^0+(?=0{1}.\d*)|^[0+*/-]+(?=-\d)|^[+*/0]+(?=\d))|([+*/-]+(?=[*+/])|[-+/]+(?=-{2,}\d+)|[+/]+(?=[*])|(?<=\d+\.+\d*)\.+)(?![*-+/])/g
      let val = str.replace(re,"")
      return val
    }



  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "0",
        submit: "",
        result:""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleZero = this.handleZero.bind(this);
      this.handleOne  = this.handleOne.bind(this)
      this.handleTwo  = this.handleTwo.bind(this)
      this.handleThree  = this.handleThree.bind(this)
      this.handleFour  = this.handleFour.bind(this)
      this.handleFive  = this.handleFive.bind(this)
      this.handleSix  = this.handleSix.bind(this)
      this.handleSeven  = this.handleSeven.bind(this)
      this.handleEight  = this.handleEight.bind(this)
      this.handleNine  = this.handleNine.bind(this)
      this.handleAdd  = this.handleAdd.bind(this)
      this.handleSub  = this.handleSub.bind(this)  
      this.handleMult  = this.handleMult.bind(this)
      this.handleDiv  = this.handleDiv.bind(this)
      this.handleDec  = this.handleDec.bind(this)
      this.handleClear  = this.handleClear.bind(this)
      this.handleEqual  = this.handleEqual.bind(this)





    }


    handleChange(event) {
      let val = event.target.value
      val = input(val)
      this.setState({
        input: val,
       

      });
    }

    handleSubmit(event) {

         let val = this.state.submit
         event.preventDefault()
         this.setState({
         submit: this.state.input,
         result: val
      }); 
    }


    handleZero(){
      
      this.setState(state=>({
        input: state.input+=0
      })); 
    }


    handleOne(){
      
      this.setState(state=>({

        input: state.input+=1,
        
      })); 
    }

    handleTwo(){
      
      this.setState(state=>({

        input: state.input+=2,
        
      }));
    }

    handleThree(){
      this.setState(state=>({
        input: state.input+=3
      })); 
    }

    handleFour(){
      this.setState(state=>({
        input: state.input+=4
      })); 
    }

    handleFive(){
      this.setState(state=>({
        input: state.input+=5
      })); 
    }


    handleSix(){
      this.setState(state=>({
        input: state.input+=6
      })); 
    }

    handleSeven(){
      this.setState(state=>({
        input: state.input+=7
      })); 
    }

    handleEight(){
      this.setState(state=>({
        input: state.input+=8
      })); 
    }


    handleNine(){
      this.setState(state=>({
        input: state.input+=9
      })); 
    }

    handleAdd(){
      let val = this.state.input      
      val = input(val)
      this.setState(state=>({
      input: state.input+="+",
      result: val  
      }));

     
             
    }

    handleSub(){
      let val = this.state.result     
      val = this.state.input
      console.log(val)
      val = input(val)      
      this.setState(state=>({
      input: state.input+="-",
      result: val
      }));       
    }

    handleMult(){
      let val = this.state.result     
      val = this.state.input
      console.log(val)
      val = input(val)      
      this.setState(state=>({
      input: state.input+="*",
      result: val 
    }));  
    }

    handleDiv(){
      let val = this.state.result     
      val = this.state.input
      console.log(val)
      val = input(val)      
      this.setState(state=>({
      input: state.input+="/",
      result: val })); 
    }
   
    handleDec(){
      let val = this.state.input
      
      console.log(val)
      val = input(val)
      if(val.startsWith(".")){
        let decVal="0."
        val+= val.replace(".",decVal)
      }      
      this.setState(state=>({
      input: state.input+=".",
      result: val })); 
    }

    
    handleClear(){
      this.setState(state=>({
        input: "0",
        submit:"",
      result: ""
      })); 
    }
    handleEqual(){
      let val = this.state.result      
      val = this.state.input
      val = input(val)
      console.log("val:"+val)
      let arr=[]
      let firstSymbolArr=val.match(/^-.*/)
    if(firstSymbolArr){
    console.log(firstSymbolArr)
    arr=val.match(/[-+*/]+\d+/g)
    }
    
    else{
      console.log(firstSymbolArr)
    arr=val.match(/^\d[-+*/]+\d+/g)}
    
console.log(arr)
let numbers=[]





console.log()


      this.setState(state=>({
        submit: this.state.input,
         result: val
      })); 
    }


  render() {
  let currentVal= input(this.state.input) 
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input value = {this.state.input} onChange = {this.handleChange}/>
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
          
         {currentVal }<br/>
         {this.state.result}
          {/* Change code above this line */}
        </div>
      </header>
      <div id="keyboard">
        <div className="nums" id="zero" onClick={this.handleZero}>0</div>
        <div className="nums" id="one" onClick={this.handleOne}>1</div>
        <div className="nums" id="two" onClick={this.handleTwo}>2</div>
        <div className="nums" id="three" onClick={this.handleThree}>3</div>
        <div className="nums" id="four" onClick={this.handleFour}>4</div>
        <div className="nums" id="five" onClick={this.handleFive}>5</div>
        <div className="nums" id="six" onClick={this.handleSix}>6</div>
        <div className="nums" id="seven" onClick={this.handleSeven}>7</div>
        <div className="nums" id="eight" onClick={this.handleEight}>8</div>
        <div className="nums" id="nine" onClick={this.handleNine}>9</div>
        <div className="ops" id="add" onClick={this.handleAdd}>+</div>
        <div className="ops" id="substract" onClick={this.handleSub}>-</div>
        <div className="ops" id="multiply" onClick={this.handleMult}>X</div>
        <div className="ops" id="divide" onClick={this.handleDiv}>/</div>
        <div className="dec" id="decimal" onClick={this.handleDec}>.</div>
        <div className="clr" id="clear" onClick={this.handleClear}>AC</div>
        <div className="ops" id="equal" onClick={this.handleEqual}>=</div>
      </div>
    </div>
  );
}
}
export default App;
