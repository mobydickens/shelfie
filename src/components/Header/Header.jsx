import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return(
    <div className="header">
      <h1>Shelfie</h1>
      <Link to="/"><button className="header-buttons">Dashboard</button></Link>
      <Link to="/add"><button className="header-buttons">Add Inventory</button></Link>
    </div>
  )
}

export default Header;