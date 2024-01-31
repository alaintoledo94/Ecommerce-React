
import "bulma/css/bulma-rtl.min.css"
import NavBar from "./components/NavBar";
import CardWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
  <NavBar>
    <CardWidget></CardWidget>
   </NavBar>
   <ItemListContainer greeting={'Bienvenido'}></ItemListContainer>
    </div>

  )

}

export default App;
