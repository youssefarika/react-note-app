import Header from "./components/Header"
import Card from "./components/Card"
import Nav from "./components/Nav"


function App() {
  return (
      <div className="App">
          <div className="container">
            <Nav title= "Notes" variant="btn btn-sm btn-primary h-10 mr-2"/>
            <Header />
            <Card />
          </div>
      </div>
  )
}

export default App
