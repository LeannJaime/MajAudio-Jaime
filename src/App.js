import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/index';

function App() {


  return (
    <>
    <NavBar/>
    <div className="App">
    </div>
    <ItemListContainer greeting={"¡Contamos con productos de alta calidad!"} />
    <ItemDetailContainer/>
    </>
  );
}

export default App;
