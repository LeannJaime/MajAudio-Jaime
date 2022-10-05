import React, { useContext } from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';

const NavBar = () => {

  const value = useContext(Shop)

  console.log(value);
  
  return (
    <>
        <h1>MAJ AUDIO</h1>
        <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/productos">Productos</Link></li>
    <li><Link to="*">Contacto</Link></li>
    <li><Link to="*">Nosotros</Link></li>
    <Link to="/cart"><CartWidget/></Link>
    </ul>   
    <span>{value.mensaje}</span>
    </> 
  )
}

export default NavBar