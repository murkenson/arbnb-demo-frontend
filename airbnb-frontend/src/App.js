import React, { Component } from "react";
import logo from "./Header/logo.svg";
import Header from "./Header/Header";
import Main from "./Products/Main";
import Footer from "./Footer/Footer";

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
