import React, { Component } from 'react';
import '../styles/App.css';

//component imports
import NavBar from './NavBar.js';
import Header from './Header.js';
import Section from './Section.js';
import Form from './Form.js';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div class="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
