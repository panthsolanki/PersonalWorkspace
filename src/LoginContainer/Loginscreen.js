import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Login from "LoginContainer/Login";
import Register from "LoginContainer/Register";
import { auth, db } from "fb";
import { ColumnDiv } from "baseStyled";
import { ContainerWrapper } from 'LoginContainer/styled'

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginmessage: "",
      buttonLabel: "Register",
      errormessage: "",
      isLogin: true
    };
  }
  componentWillMount = () => {
    console.log(db);
    this.initConfig();
  };

  initConfig = () => {
    const loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginmessage: loginmessage
    });
  };

  handleClick = event => {
    let loginmessage;
    this.setState({ errormessage: "" });
    if (this.state.isLogin) {
      loginmessage = "Already registered.Go to Login";
      this.setState({
        loginmessage,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginmessage,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  };
  login = (email, password) => {
    // log the user in
    console.log(`login with ${email} and ${password}`);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred);
      })
      .catch(err => {
        console.log(err);
        this.setState({ errormessage: err.message });
      });
  };

  register = (email, password) => {
    console.log(`register with ${email} and ${password}`);
    // sign up the user & add firestore data
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred);
      })
      .catch(err => {
        console.log(err);
        this.setState({ errormessage: err.message });
      });
  };

  render() {
    const { isLogin } = this.state;
    const loginComp = (
      <Login
        parentContext={this}
        appContext={this.props.parentContext}
        login={this.login}
      />
    );
    const registerComp = (
      <Register parentContext={this} register={this.register} />
    );
    const renderComp = isLogin ? loginComp : registerComp;

    return (
        <ContainerWrapper>
          {renderComp}
          <ColumnDiv>
            {this.state.loginmessage}
            <MuiThemeProvider>
              <ColumnDiv>
                <RaisedButton
                  label={this.state.buttonLabel}
                  primary={true}
                  style={style}
                  onClick={event => this.handleClick(event)}
                />
              </ColumnDiv>
            </MuiThemeProvider>
            {this.state.errormessage}
          </ColumnDiv>
        </ContainerWrapper>
    );
  }
}
const style = {
  marginTop: 15,
  marginBottom : 15
};
export default Loginscreen;
