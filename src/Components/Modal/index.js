import React from 'react';

import './style.css';

const  Modal = ({visible, children}) =>{
  return visible ? (
   <div className="modal-conatiner">
     {children}
   </div>
  )
  :
  null;
}

export default Modal;