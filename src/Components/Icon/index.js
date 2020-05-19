import React from 'react';

const Icon = ({name, className}) => {
    return <i className={`fas fa-${name} ${className}`}></i>
};

export default Icon;