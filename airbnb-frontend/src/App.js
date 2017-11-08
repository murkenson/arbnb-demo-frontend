import React, { Component } from "react";
import logo from "./Assets/logo.svg";
import Header from "./Header/";
import Main from "./Products/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
