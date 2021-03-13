import React, { Component } from "react";
import "../LogIn/LoginPage.css";
import { auth, storage } from "../firebase.js";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null
    };
  }

  login = () => {
    auth
      .signInWithEmailAndPassword(this.state.emailId, this.state.password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload();
        // ...
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  render() {
    return (
      <div>
        <input
          onChange={event => {
            this.state.emailId = event.currentTarget.value;
          }}
          className="loginpage_text"
          type="text"
          placeholder="Phone number, username, or email"
        />
        <input
          onChange={event => {
            this.state.password = event.currentTarget.value;
          }}
          className="loginpage_text"
          type="password"
          placeholder="Password"
        />
        <button onClick={this.login} className="loginpage_button">
          Log In
        </button>
      </div>
    );
  }
}

export default SignIn;
