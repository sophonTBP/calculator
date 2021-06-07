import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import React, { useReducer } from 'react';

 




  function cleanInput (str) {
  
    let re = /-?(0|[1-9]\d*)(\.\d+)?/g
    let cleanImput = str.match(re)
    return cleanImput.join("").toString()
    }



  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "0",
        submit: "",
        result:"",
        showResult:false,
        start:true
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
      val = cleanInput(val)
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
      let val=(this.state.input)
      if(val.match(/^0\./)){
        this.setState(state=>({
          input: state.input+=0,
          showResult:false
        }))

      }
      
      if(val.startsWith("0")){
        this.setState(state=>({
          input: state.input.replace("0","0"),
          showResult:false
        })); 

      }else
      this.setState(state=>({
        input: state.input+=0,
        showResult:false
      })); 
    }


    handleOne(){
let value= this.state.input
      if(this.state.start===true){
        value="1"
        this.setState(state=>({ 
          input:"1",
          start:false
        }));
      }else
      
      this.setState(state=>({
        value: this.state.input,
        input: value+1,
        showResult:false,
        
      })); 
    }

    handleTwo(){
      let value= this.state.input
      if(this.state.start===true){
        value="2"
        this.setState(state=>({ 
          input:"2",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+="2",
        showResult:false
      })); 
    }
    handleThree(){
      let value= this.state.input
      if(this.state.start===true){
        value="3"
        this.setState(state=>({ 
          input:"3",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+3,
        showResult:false
      }));  
    }

    handleFour(){
      let value= this.state.input
      if(this.state.start===true){
        value="4"
        this.setState(state=>({ 
          input:"4",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+4,
        showResult:false
      })); 
    }

    handleFive(){

      let value= this.state.input
      if(this.state.start===true){
        value="5"
        this.setState(state=>({ 
          input:"5",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+5,
        showResult:false
      })); 
    }


    handleSix(){

      let value= this.state.input
      if(this.state.start===true){
        value="6"
        this.setState(state=>({ 
          input:"6",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+6,
        showResult:false
      })); 
    }

    handleSeven(){
      let value= this.state.input
      if(this.state.start===true){
        value="7"
        this.setState(state=>({ 
          input:"7",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+7,
        showResult:false
      })); 
    }

    handleEight(){
      let value= this.state.input
      if(this.state.start===true){
        value="8"
        this.setState(state=>({ 
          input:"8",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+8,
        showResult:false
      })); 
    }


    handleNine(){

      let value= this.state.input
      if(this.state.start===true){
        value="9"
        this.setState(state=>({ 
          input:"9",
          start:false
        }));
      }else
      
      
      this.setState(state=>({
        value: this.state.input,
        input: value+9,
        showResult:false
      })); 
    }

    handleAdd(){
      let val = this.state.input  
      if(val.endsWith("*-"))
      this.setState(state=>({
        input: state.input.replace("*-","+"),
        result: val
        }));else
        if(val.endsWith("/-"))
      this.setState(state=>({
        input: state.input.replace("/-","-"),
        result: val
        }));else

      if(val.endsWith("-"))
      this.setState(state=>({
        input: state.input.replace("-","+"),
        result: val
        }));else
        if(val.endsWith("*"))
      this.setState(state=>({
        input: state.input.replace("*","+"),
        result: val
        }));else
        if(val.endsWith("/"))
      this.setState(state=>({
        input: state.input.replace("/","+"),
        result: val
        }));else
      

      if(!val.endsWith("+"))
      this.setState(state=>({
      input: state.input+="+",
      result: cleanInput(val)  
      }));

     
             
    }

    handleSub(){
      let val = this.state.input
      console.log(val)

      if(val.endsWith("*-"))
      this.setState(state=>({
        input: state.input.replace("-","-"),
        result: val
        }));else


      
      if(val.endsWith("+"))
      this.setState(state=>({
        input: state.input.replace("+","-"),
        result: val
        }));else
        

      if(!val.endsWith("--"))      
      this.setState(state=>({
      input: state.input+="-",
      result: val
      }));       
    }

    handleMult(){
      let val = this.state.input
      console.log(val)
      if(val.endsWith("-"))
      this.setState(state=>({
        input: state.input.replace("-","*"),
        result: val
        }))
       else 
       if(val.endsWith("+"))
      this.setState(state=>({
        input: state.input.replace("+","*"),
        result: val
        }))
       else 


      if(val.endsWith("*"))
      this.setState(state=>({
        input: state.input.replace("*","*"),
        result: val
        }))
       else  
      this.setState(state=>({
      input: state.input+="*",
      result: val 
    }));  
    }

    handleDiv(){
      let val = this.state.input
      console.log(val)
      if(val.endsWith("-"))
      this.setState(state=>({
        input: state.input.replace("-","/"),
        result: val
        }))
       else 
       if(val.endsWith("+"))
      this.setState(state=>({
        input: state.input.replace("+","/"),
        result: val
        }))
       else 


      if(val.endsWith("/"))
      this.setState(state=>({
        input: state.input.replace("/","/"),
        result: val
        }))
       else  
      this.setState(state=>({
      input: state.input+="/",
      result: val 
    }));  
    

    }
   
    handleDec(){
      let val = this.state.input
      
      
      console.log(val)
      

      if(val.startsWith(".")){
        let decVal="0."
        val= val.replace(".",decVal)
        this.setState(state=>({
          input: state.input,
          start:false,
          result: val })); 

      }else      
      if((!val.includes(".")))
      this.setState(state=>({
      input: state.input+=".",
      result: val, 
      start:false,})); 
       else 
       if((val.includes("."))&(val.lastIndexOf("*"))>(val.lastIndexOf(".")))
          {
        this.setState(state=>({
          input: state.input+=".",
          result: val, 
          start:false,}));

       }
       else 
       if((val.includes("."))&(val.lastIndexOf("/"))>(val.lastIndexOf(".")))
          {
        this.setState(state=>({
          input: state.input+=".",
          result: val, 
          start:false,}));

       }
       else 
       if((val.includes("."))&(val.lastIndexOf("+"))>(val.lastIndexOf(".")))
          {
        this.setState(state=>({
          input: state.input+=".",
          result: val, 
          start:false,}));

       }
       else 
       if((val.includes("."))&(val.lastIndexOf("-"))>(val.lastIndexOf(".")))
          {
        this.setState(state=>({
          input: state.input+=".",
          result: val, 
          start:false,}));

       }



    }

    

    
    handleClear(){
      this.setState(state=>({
        input: "0",
        submit:"",
      result: "0",
      showResult:false,
      start:true
      })); 
    }
    handleEqual(){
      let value = this.state.input
      
      

   
      let re = /([+*/-]+(?=[*+/])|[-*+/]+(?=-{2,}))/g
    
  let arr=value.match(/^\d+\.*\d*|[-+*/]+\d+\.*\d*/g)


console.log(arr)
let numbers=[]
arr.forEach((number)=>{numbers.push(number.match(/\d+/))})







  let regexOps=/[-*+/]+/g
  let regexNums=/-?(0|[1-9]\d*)(\.\d+)?/g
  

const reducer = (acc, curr) =>  {
  let block=Array.from(curr) 
  if(!regexOps.test(block[0])){
    
  
    block=parseFloat(block.join(""))
    console.log(block)
  } 
  if(block[1]==="-"&&block[0]==="-")
  {console.log("--block: "+block.join("").replace("--","+"))
  block=parseFloat(block.join("").replace("--","+"))
  }

if((!regexOps.test(block[1]))&&(block[0]==="-")){
    
  
    block=parseFloat(block.join(""))
    console.log(block)
  }




  
if((!regexOps.test(block[1]))&&(block[0]==="+")){
  let val1=0
  val1=block.join("").match(regexNums)
  console.log("+ block"+val1)
  console.log(parseFloat(val1))
  block=parseFloat(block.join("").match(regexNums))
  
}

if((!regexOps.test(block[1]))&&block[0]==="*"){
  console.log(block.join("").match(regexNums))
  block=["*",parseFloat(block.join("").match(regexNums))]
  
}
 console.log("* block"+block)
if((!regexOps.test(block[1]))&&block[0]==="/")
  
    {block=["/",parseFloat(block.join("").match(regexNums))]}
console.log("/ block"+block)

if((block[1]==="-")&&(block[0]==="*"))
  
  {
  let val=parseFloat(block.join("").match(regexNums))
  val=-val
  block=["*",val]}




if(block[1]==="-"&&block[0]==="/")
  
  {block=["/",parseFloat(block.toString().match(regexNums).join(""))*-1]}
  console.log("-/block"+block)
  

 acc.push(block);

return acc;}
console.log("arr before reduce"+arr)

let newArr2=arr.reduce(reducer, [])
console.log("before reduce"+newArr2) 

 for(let i=0;i<newArr2.length;i++)
   
  if (Array.isArray(newArr2[i])){
    if(newArr2[i][0]==="*"){
      newArr2[i-1]=(newArr2[i-1]*newArr2[i][1])
      
    }
    if(newArr2[i][0]==="/"){
      newArr2[i-1]=(newArr2[i-1]/newArr2[i][1])
  }}
  console.log("after reduce"+newArr2) 
  
 
 let reduceAdd= (acc, curr) => 
 {if (!Array.isArray(curr))
 
 {acc += curr}
return acc}
value= newArr2.reduce(reduceAdd,0)
console.log(value)

 
 

      this.setState(state=>({
        
         result: value,
         input:value.toString(),
         showResult:true,
         start:false

      })); 
    }


  render() {
  let currentVal= this.state.input
  console.log(currentVal)
  let showResult =this.state.showResult
  let display;

  

    if (showResult){display = <div id="display">{this.state.result}</div>}
    else{display = <div id="display">{currentVal}</div>}


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
          {this.state.result}
         <br/>
         {currentVal }
          {/* Change code above this line */}
        </div>
      </header>
      
       {display}



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
        <div className="ops" id="subtract" onClick={this.handleSub}>-</div>
        <div className="ops" id="multiply" onClick={this.handleMult}>X</div>
        <div className="ops" id="divide" onClick={this.handleDiv}>/</div>
        <div className="dec" id="decimal" onClick={this.handleDec}>.</div>
        <div className="clr" id="clear" onClick={this.handleClear}>AC</div>
        <div className="ops" id="equals" onClick={this.handleEqual}>=</div>
      </div>
      <ReactFCCtest />  
    </div>
    
  );
}
}
export default App;
