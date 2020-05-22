import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Search from './Search';
import Results from './Results';

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>hts.directory</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>
      <div className="content">
        <Search/>
        <Results/>
      </div>
    </div>
  );
}

export default App;
