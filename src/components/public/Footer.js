import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "Company LUkithas";

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li> */}
        <li className="nav-item"><Link to={`/`} className="nav-link px-2 text-muted">Home</Link></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
      <span  onClick={handleClick}><img id='App-logo-id' className="App-logo" heigth="100" src="icono-rick-and-morty.png" alt="logo-giratorio"></img></span>
      <p className="text-center text-muted">&copy; {year} {companyName}, click = {clicks}</p>
    </footer>
  )
}

export default Footer;