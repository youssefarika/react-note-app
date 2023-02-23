import Header from "./components/Header"
import Cards from "./components/Cards"
import Nav from "./components/Nav"


function App() {
  return (
      <div className="App">
          <div className="container">
            <Nav title= "Notes" variant="btn btn-sm btn-primary h-10 mr-2"/>
            <Header />
            <Cards />
          </div>
      </div>
  )
}

export default App
