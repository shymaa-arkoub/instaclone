import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import inst_img from "../../images/loginPageImg.svg";
import inst_logo from "../../images/logoinsta.png";
import fb_logo from "../../images/fb.png";
import app_store from "../../images/app.png";
import play_store from "../../images/play.png";
import "./LoginPage.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={inst_img} width="454px" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage_logo" src={inst_logo} />
                  <div className="loginpage_signin">
                    {this.state.isLogin ? <SignIn /> : <SignUp />}

                    <div className="loginpage_ordiv">
                      <div className="loginpage_divider"></div>
                      <div className="loginpage_or">OR</div>
                      <div className="loginpage_divider"></div>
                    </div>

                    <div className="loginpage_fblogin">
                      <img
                        src={fb_logo}
                        width="15px"
                        style={{ marginRight: "5px" }}
                      />
                      Log in with Facebook
                    </div>
                    <div className="loginpage_forgetpassword">
                      Forgot password?
                    </div>
                  </div>
                </div>

                <div className="loginpage_signoptions">
                  {this.state.isLogin ? (
                    <div className="loginpage_signupopt">
                      Don't have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginpage_signinopt">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>

                <div className="loginpage_downloadsection">
                  <div>Get the app.</div>
                  <div className="loginpage_downloadoption">
                    <img
                      className="loginpage_downloadimg"
                      src={app_store}
                      width="136px"
                    />
                    <img
                      className="loginpage_downloadimg"
                      src={play_store}
                      width="136px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
