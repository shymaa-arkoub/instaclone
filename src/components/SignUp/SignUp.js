import React, { Component } from "react";
import "./SignUp.css";
import { auth, storage } from "../firebase.js";
import { runInThisContext } from "vm";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null
    };
  }

  newSignUp = () => {
    auth
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user;
        // ...
        let paylod = {
          userId: user.uid,
          userName: this.state.userName,
          name: this.state.name,
          profileImage: ""
        };
        const requestOpt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paylod)
        };

        fetch("http://localhost:8080/users", requestOpt)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
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
          placeholder="Mobile number or Email"
        />
        <input
          onChange={event => {
            this.state.name = event.currentTarget.value;
          }}
          className="loginpage_text"
          type="text"
          placeholder="Full name"
        />
        <input
          onChange={event => {
            this.state.userName = event.currentTarget.value;
          }}
          className="loginpage_text"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={event => {
            this.state.password = event.currentTarget.value;
          }}
          className="loginpage_text"
          type="password"
          placeholder="Password"
        />
        <button onClick={this.newSignUp} className="loginpage_button">
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUp;
