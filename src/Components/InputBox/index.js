import React from 'react'

import './style.css';

const InputBox = ({className='', style={}, label, id, type='text', ...otherProps}) => {
    return(
        <div style={style} className={`input-box ${className}`}>
         <label className="input-box-label">{label}</label>
         <input {...otherProps} type={type} data-id={id} className="input-box-input"/>
        </div>
    )
}
export default InputBox;