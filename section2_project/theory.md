how to input java script in react  

syntax 

import { createRoot } from 'react-dom/client'

function () {
  const firstname= ""
  const lastname=""


    return(
        <h1>hello {firstname} {lastname}</h1>
    )
}


usage of map method 

challege:

const nums = [1,2,3,4,5]
// output [1,4,9,16,25]

we use map function for the output

const squares = nums.map(fuction(){
   return num * num
})

console.log(squares)  


// converting the array of strings that return a array of original strings which are wrqapping with html <p></p> tags


const person = ["thoja","gowda"]
//output ["<p>thoja</p>","<p>gowda</p>"]

const persons = person.map(son => 
    `<p>${son}</p>`
)

