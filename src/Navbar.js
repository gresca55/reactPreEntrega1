import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Nosotros</a></li>
        <li><a href="/">Salud</a></li>
        <li><a href="/">Tienda</a></li>
        <li><a href="/">Contactenos</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <CartWidget />

      <Navbar />
      
      <ItemListContainer/>
    </nav>


  );
}

export default Navbar;
