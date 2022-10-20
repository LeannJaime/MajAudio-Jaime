import React, { useContext } from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';

const NavBar = () => {

  const value = useContext(Shop)
  
  return (
    <>
    <div className='imglogo'>
        <img src="./img/Logo.jpg" alt="logo" width={400}/>
    </div>
        <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/productos">Productos</Link></li>
    <li><Link to="/category/Subwoofers">Subwoofers</Link></li>
    <li><Link to="/category/Parlantes">Parlantes</Link></li>
    <li><Link to="*">Nosotros</Link></li>
    <Link to="/cart"><CartWidget/></Link>
    </ul>   
    <span>{value.mensaje}</span>
    </> 
  )
}

export default NavBar