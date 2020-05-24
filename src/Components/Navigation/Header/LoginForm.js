import React from 'react';
import {withRouter} from 'react-router-dom'

import InputBox from '../../InputBox';
import {addUser} from '../../../Mutations/User'
import {logInUser} from '../../../Mutations/Auth'

import { setToken } from '../../../helpers';

class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
         name: '',
         email: '',
         phone: '',
         password: ''
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.isLoginForm !== this.props.isLoginForm){
           this.clearForm();
        }
    }

    onChange = (e) => {
     const {dataset, value} = e.target;
     this.setState({
         [dataset.id]: value
     });

    }

    clearForm = ()=> {
        this.setState({
            name: '',
            email: '',
            phone: '',
            password: ''
        })
    }

    onFormSubmit = async (e) => {
     e.preventDefault();
     const {name, email, phone, password} = this.state;
     const {isLoginForm} = this.props;   
     const userData = {
         name,
         email,
         phone,
         password
     }

     try{
         const result = isLoginForm ? await logInUser(email, password) : await addUser(userData);
         if(result){
         setToken(result.token);
         this.props.closeModal();
         this.props.history.replace('/home');
         }
     }catch(err){
        console.log("====error in adding user===",err);

     }
    }

    render(){
        const {name, email, phone, password} = this.state;
        const {isLoginForm} = this.props
        return(
            <form  className="login-form" onSubmit={this.onFormSubmit}>
              <InputBox 
               label="User name"
               id="name"
               onChange={this.onChange}
               value={name}
               style={{
                   display: isLoginForm ? 'none' : 'flex'
               }}
               className={isLoginForm ? 'hide-field': 'show-field'  }
              />  
              <InputBox 
               label="Email"
               id="email"
               onChange={this.onChange}
               value={email}
              /> 

             <InputBox 
               label="Phone number"
               id="phone"
               onChange={this.onChange}
               value={phone}
               style={{
                display: isLoginForm ? 'none' : 'flex'
                }}
               className={isLoginForm ?  'hide-field' : 'show-field' }
              /> 

             <InputBox 
               label="Password"
               id="password"
               onChange={this.onChange}
               value={password}
               type="password"
              /> 

             <button type="submit" className="form-submit-button">
                 {isLoginForm ?  'Login' : 'Signup'}
             </button>


            </form>
        )
    }
}

export default withRouter(LoginForm);