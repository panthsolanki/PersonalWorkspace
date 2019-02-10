import React, { Component } from 'react';
import 'App.css';
import Loginscreen from 'LoginContainer/Loginscreen'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:{},
      uploadScreen:[]
    }
  }
  componentWillMount(){
    const loginPage = <Loginscreen parentContext={this}/>;
    this.setState({loginPage})
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
export default App;
