import React, { PureComponent } from 'react'; // Importamos React y PureComponent
import '../style/navBar.css';
import logo from '../img/vitaly_logo.png';

export default class NavBar extends PureComponent {
  render() {
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
  
        <div className="nav-links">
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" rel="noopener noreferrer">logout</a>
        </div>

      </div>
    );
  }
}
