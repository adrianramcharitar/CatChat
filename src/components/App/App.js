import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <section className="App">
                <Header />
                <p>UserPanel</p>
                <p>ChatLog</p>
            </section>
        );
    }
}



export default App;
