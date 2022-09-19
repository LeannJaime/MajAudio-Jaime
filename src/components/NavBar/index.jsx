import React from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <h1>MAJ AUDIO</h1>
        <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/productos">Productos</Link></li>
    <li><Link to="*">Contacto</Link></li>
    <li><Link to="*">Nosotros</Link></li>
    </ul>   
    <CartWidget/>
    </> 
  )
}

export default NavBar