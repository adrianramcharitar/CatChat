import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';
import UserPanel from '../UserPanel/UserPanel';

class App extends Component {
    render() {
        return (
            <section className="App">
                <Header />
                <UserPanel />
                <p>ChatLog</p>
            </section>
        );
    }
}



export default App;
