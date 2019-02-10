import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { ColumnDiv } from "baseStyled";
import { LoginWrapper } from "LoginContainer/styled"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleClick(event) {
    console.log("Login button clicked");
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <LoginWrapper>
        <MuiThemeProvider>
          <ColumnDiv>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
              style = {{width: "100%"}}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
              style = {{width: "100%"}}
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </ColumnDiv>
        </MuiThemeProvider>
      </LoginWrapper>
    );
  }
}
const style = {
  marginTop: 15,
  marginBottom : 15
};
export default Login;
