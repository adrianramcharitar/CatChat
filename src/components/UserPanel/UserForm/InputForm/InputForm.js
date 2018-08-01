import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component{
    render() {
        return (
            <form className="InputForm">
                <header>Join Chat</header>
                <fieldset className="button-input">
                    <input type="text" value="Test" />
                    <button>Join</button>
                </fieldset>
            </form>
        );
    }
}

export default InputForm;