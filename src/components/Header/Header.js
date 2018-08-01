import React, { Component } from 'react';
import logo from '../../shared/assets/logo-grey.svg';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <header className="Header">
                <img src={logo} className="logo logo-grey" />
                <h1 className="wordmark">Cat<strong>Chat</strong></h1>
            </header>
        );
    }
}

export default Header;