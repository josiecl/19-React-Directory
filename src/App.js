import React, { Component } from "react";
import './App.css';
import Heading from './components/Heading';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import API from './utils/API';

class App extends Component {
  state = {
    users: [],
    search: "",
    filteredUsers: []
  }

  componentDidMount() {
    API.getUsers().then(res => {
      console.log(res);
      this.setState({users: res.data.results, filteredUsers: res.data.results})
    })
  }

  // pass down as prop; pass it as this.handleInputChange (same as Table with emps below)
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      search: value
    });

    console.log(event.target.value);

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div className="App">
        <Heading />
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
         
        />
        <Table emps={this.state.filteredUsers} search={this.state.search} />
      </div>
    );
  }
}

{/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}

export default App;
