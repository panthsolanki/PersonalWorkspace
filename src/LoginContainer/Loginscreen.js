import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Login from "LoginContainer/Login";
import Register from "LoginContainer/Register";
import { auth, db } from "fb";
class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginscreen: {},
      loginmessage: "",
      buttonLabel: "Register",
      errormessage: "",
      isLogin: true
    };
  }
  componentWillMount() {
    console.log(db);
    const loginscreen = <Login parentContext={this} appContext={this.props.parentContext} login={this.login} />;
    const loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    });
  }
  handleClick(event) {
    let loginmessage;
    this.setState({errormessage:''});
    if (this.state.isLogin) {
      const loginscreen = <Register parentContext={this} register={this.register} />;
      loginmessage = "Already registered.Go to Login";
      this.setState({
        loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      const loginscreen = <Login parentContext={this} login={this.login} />;
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  }
  login = (email, password) => {
    // log the user in
    console.log(`login with ${email} and ${password}`);
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred);
    }).catch(err => {
      console.log(err);
      this.setState({ errormessage: err.message });
    });
  }

  register = (email, password) => {
    console.log(`register with ${email} and ${password}`);
    // sign up the user & add firestore data
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      // return db.collection('users').doc(cred.user.uid).set({
      //   bio: signupForm['signup-bio'].value
      // });
    }).catch(err => {
      console.log(err);
      this.setState({ errormessage: err.message });
      // signupForm.querySelector('.error').innerHTML = err.message;
    });
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
              <RaisedButton
                label={this.state.buttonLabel}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
          {this.state.errormessage}
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Loginscreen;
