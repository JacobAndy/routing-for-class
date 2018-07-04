import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Joes Ecommerce Store</h1>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
