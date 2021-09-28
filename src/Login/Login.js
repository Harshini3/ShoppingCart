import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import {Router,Link,Route,Redirect,BrowserRouter} from 'react-router-dom';
import img1 from '../images/img2.jpg';
 class Login extends React.Component  {
    constructor(props)
    {
        super(props);
        this.state = {
            redirect: false
        }
    }
        setRedirect = () => {
            this.setState({
              redirect: true
            })
          }
          renderRedirect = () => {
            if (this.state.redirect) {
                return <Redirect to='/' />
            } 
        }
     render()
     {
        
        return (
            <div className="d1">
                <h1>123 Shopping Cart Login </h1> 
                <form>
                    <div className="form">
                <label>Username:</label>
                <input type ="text" className="in" id="11" value='123'/><br/>
                <label>Password:</label>
                <input type ="password"className="in" id="12" value='123'/><br/>
                <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Login</button>
       </div>
                </div>
                </form>
                
         </div>
        );
     }
    

}

 export default Login;