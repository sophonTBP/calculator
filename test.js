


let string="0005+++++5"


function cleanInput (str) {
  
    let re = /(?!0)\d+|(?=0)(0\.)|[+/*](?=[\d])|[*-](?=[-\d])/g
        let cleanImput = str.match(re)
        return cleanImput.join("").toString()
      }
     console.log(cleanInput(string))
  