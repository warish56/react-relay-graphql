import React from 'react';

import './style.css';
class Menu extends React.PureComponent{
    render(){
        const {children, visible = false} = this.props
        return visible ?(
            <div className="menu-container">
                {
                    children
                }
            </div>

        )
        :
        null;
    }
}

export default Menu;