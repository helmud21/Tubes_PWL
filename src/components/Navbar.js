import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="navbar">
          <ul className="listNav">
            <li><a href={ '/' }>Beranda</a></li>
            <li><a href={ '/about' }>Tentang Kami</a></li>
            <li><a href={ '/contact' }>Kontak</a></li>
          </ul>
        </div>
    );
  }
}

export default About