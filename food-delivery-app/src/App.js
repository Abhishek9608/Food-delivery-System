import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Routes from "./components/routes/Routes";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes />
        <Footer />
      </>
    );
  }
}

export default App;
