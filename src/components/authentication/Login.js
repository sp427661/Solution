import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/login.css";
import AuthNavbar from "../layout/AuthNavbar";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  loginHandler= (event) => {
    event.preventDefault();
    const data = {
       username: this.state.username,
       password: this.state.password,
       redirect: false
    }
    console.log(data);
    axios.post('http://localhost:3000/users/login', data)
    .then(res => {
      console.log(res);
      if(res.data.token !== null) {
        this.setState({redirect: true});
      }
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={'/home'} />
    }

    return (
      <React.Fragment>
        <AuthNavbar />
        <div className="loginDiv">
          <div className="row">
            <div className="col-md-6 limit">
              <img src={image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="auth__auth">
                <h1 className="auth__title">Access your account</h1>
                <p>Fill in your Username and password to proceed</p>
                <form className="form" onSubmit={this.loginHandler}>
                  <label>Username</label>
                  <input
                    type="text"
                    name="Username"
                    id="Username"
                    value={this.state.username}
                    onChange={(event) =>{
                      this.setState({username: event.target.value})
                    }}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    autoComplete="off"
                    onChange={(event) =>{
                      this.setState({password: event.target.value})
                    }}
                  />
                  <button type="submit" className="button button__accent">
                    Log in
                  </button>
                  <div className="row loginFooter">
                    <div className="col-md-5">
                      <a href="/forget">
                        <h6 className="forget">Forgot your password?</h6>
                      </a>
                    </div>
                    <div className="col-md-7">
                      <h6 className="signup">
                        Don’t have an account? <a href="/register">Sign up </a>
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
