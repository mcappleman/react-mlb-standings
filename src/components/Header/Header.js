import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/small-baseball.png';

class Header extends Component {

    render() {

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to MLB Standings</h2>
                <nav>
                    <ul>
                        <li><Link to='/'>Daily Games</Link></li>
                        <li><Link to='/teams'>Update Teams</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }

} 

export default Header;