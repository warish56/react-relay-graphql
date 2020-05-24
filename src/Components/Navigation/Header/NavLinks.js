import React from 'react';
import { withRouter } from 'react-router-dom';

import Menu from '../../Menu'
import MenuItem from '../../Menu/MenuItem';
import Modal from '../../Modal';
import LoginForm from './LoginForm';

import ProfilePic from '../../../Assets/Navbar/profilePic.jpg'
import './style.css';
import { removeToken, IS_LOGGED_IN } from '../../../helpers';



class NavLinks extends React.Component{

    constructor(props){
        super(props);
        this.state={
           userMenuActive: false,
           loginModalActive: false,
           isLoginForm: true
        }
    }


    toggleUserMenu = () => {
        this.setState((prevState) => ({
           userMenuActive: !prevState.userMenuActive
        }))
    }

    toggleLoginModal = () => {
        this.setState((prevState) => ({
           loginModalActive: !prevState.loginModalActive
        }))
    }

    SwitchBetweenLoginAndSignup = ()  => {
        this.setState((prevState) => ({
            isLoginForm: !prevState.isLoginForm
         }))
    }

    logout = () => {
        removeToken();
        this.props.history.replace('/');
    }

    render(){
        const {userMenuActive, loginModalActive, isLoginForm} = this.state;
        return(
           <>
            <div className="nav-links-container">

                {
                    IS_LOGGED_IN &&
                    <>
                        <span>Search</span>
                        <span>Home</span>
                        <span>Detail</span>
                    </>
                }
              

                {
                   !IS_LOGGED_IN && <button onClick={this.toggleLoginModal} className="nav-button">Login</button>

                }

                {
                    IS_LOGGED_IN &&
               <button onClick={this.toggleUserMenu} className="nav-user-box">
                    <img className="nav-user-img" src={ProfilePic} alt="user image"/>
                    <Menu visible={userMenuActive}>
                    <MenuItem>  
                    <button className="menu-button">Account</button>
                    </MenuItem> 

                    <MenuItem> 
                    <button className="menu-button">Settings</button>
                    </MenuItem> 

                    <MenuItem> 
                    <button onClick={this.logout} className="menu-button">Logout</button>
                    </MenuItem> 
                    
                    </Menu>
               </button>
               }
            </div>
            


            <Modal visible={loginModalActive}>
            <div className="modal-form-content">

                 <LoginForm closeModal={this.toggleLoginModal} isLoginForm={isLoginForm}/>
                 
                 <hr className="hr"></hr>
                 <div className="modal-form-footer">
                     <button 
                     onClick={this.SwitchBetweenLoginAndSignup} 
                     className="modal-form-footer-button"
                     >
                      {isLoginForm ? 'Signup': 'Login' }
                     </button>
                 </div>
            </div>
        </Modal>
        </>
        )
    }
}
export default withRouter(NavLinks);