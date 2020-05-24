import React from 'react';

import NavLinks from './NavLinks';
import './style.css';

class Navbar extends React.Component{

    render(){
        return(
            <nav className="nav-container">
              <NavLinks />
            </nav>
        )
    }
}

export default Navbar;