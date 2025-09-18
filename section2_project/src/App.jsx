import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


function App() {
   
  // we use .map() to map our data objects inorder to create a reusable code
  const entryElements = data.map((entry) => {
    return (
              <Entry 
                key={entry.id}

                // here we are passing the props individually which makes code bit long 

                // img={entry.img}
                // title={entry.title}
                // country={entry.country}
                // googleMapsLink={entry.googleMapsLink}
                // text={entry.text} 

                // inorder to reduce code we simply passing  the boject as props
                 entry={entry}  
             />
            )
  })


  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

export default App
