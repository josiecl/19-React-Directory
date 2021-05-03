import React, { Component } from "react";
import './App.css';
import Heading from './components/Heading';
import Table from './components/Table';
import API from './utils/API';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    API.getUsers().then(res => {
      console.log(res);
      this.setState({users: res.data.results})
    })
  }



  render() {
    return (
      <div className="App">
        <Heading />
        <Table emps={this.state.users} />
      </div>
    );
  }
}

export default App;
