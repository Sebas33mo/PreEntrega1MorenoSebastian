import './App.css'
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
  return(
      <div>
      <NavBar/>
      

      <ItemListContainer props={'Primera Prop'}/>
      </div>

  )
}

export default App