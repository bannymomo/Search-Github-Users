import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Main } from "./Components/Main";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialView: true,
      isLoading: false,
      error: null,
      users: [],
      inputValue: ""
    };
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleClick = () => {
    const searchName = this.state.inputValue;
    const url = `https://api.github.com/search/users?q=${searchName}`;
    this.setState({ isLoading: true, initialView: false, error: null });
    axios
      .get(url)
      .then(response => {
        const result = response.data.items;
        const usersArray = [];
        result.map(item => {
          return usersArray.push(item);
        });
        console.log(usersArray);
        this.setState({
          isLoading: false,
          users: usersArray,
          inputValue: ""
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false, error: error });
      });
  };

  onKeyPress = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <Nav
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleClick={this.handleClick}
          onKeyPress={this.onKeyPress}
        />
        <Main
          isLoading={this.state.isLoading}
          initialView={this.state.initialView}
          error={this.state.error}
          users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
