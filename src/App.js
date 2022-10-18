import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './components/Home';
import Cart from './containers/CartContainer';
import ShopProvider from './context/ShopProvider';
// import { useEffect } from 'react';
// import algoritmoGuardadoAutomatico from './services/guardarProductos';

function App() {

    // useEffect(() => {
    //   console.log("Se debería ejecutar una sola vez");
    //   algoritmoGuardadoAutomatico();
    // }, [])

  return (
    <ShopProvider>
    <BrowserRouter>
      <NavBar/>
      <div className="App">
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
