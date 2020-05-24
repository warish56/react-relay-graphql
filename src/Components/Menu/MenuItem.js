import React from 'react';

import './style.css'
const MenuItem = ({children}) => {
    return(
        <div className="menu-item">
            {children}
        </div>
    )
};

export default MenuItem;