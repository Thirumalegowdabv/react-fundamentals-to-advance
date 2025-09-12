import { createRoot} from "react-dom/client";
import "./index.css";
import  Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"

const root =  createRoot(document.getElementById("root"));

root.render(
  // <TemporaryName/>
  < SecondTempName/>
 
);


// function TemporaryName() {
//     return (
//     <main>
//         <img src="/src/assets/react.svg" width="40px" alt="React image"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//           <li>Was first release in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 200k stars on GitHub</li>
//         </ul>
//   </main>
//     )
// }






function SecondTempName() {
  return (
      < div className="container"> 
         < Header />
         < Main />
         < Footer />
        
      </div>
  )
}
