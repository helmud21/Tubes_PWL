import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar';

class Home extends Component {
  render() {

    return (
        <div>
          <Nav/>
          <div className="homePage">
            <h1>Make it Your Journey!</h1>
          </div>
          <div className="listSewa">
            <div className="h2Sewa">
              <h2>Kendaraan yang disewakan matic dan manual</h2>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;