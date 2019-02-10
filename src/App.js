import React, { Component } from "react";
import Loginscreen from "LoginContainer/Loginscreen";
import { ColumnDiv } from "baseStyled";
import "App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: {},
      uploadScreen: []
    };
  }
  componentWillMount() {
    const loginPage = <Loginscreen parentContext={this} />;
    this.setState({ loginPage });
  }
  render() {
    return (
      <ColumnDiv>
        {this.state.loginPage}
        {this.state.uploadScreen}
      </ColumnDiv>
    );
  }
}
export default App;
