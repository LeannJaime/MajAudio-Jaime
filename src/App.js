import './App.css';
import CarWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/indez';

function App() {


  return (
    <>
    <NavBar/>
    <div className="App">
    </div>
    <ItemListContainer greeting={"¡Contamos con productos de alta calidad!"} />
    <CarWidget/>
    </>
  );
}

export default App;
