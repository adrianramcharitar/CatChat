import React, { Component } from 'react';
import './InputForm.css';
import PropTypes from 'prop-types';

class InputForm extends Component {
    render() {
        const { title, value, placeholderText, buttonText } = this.props;
        return (
            <form className="InputForm">
                <header>{title}</header>
                <fieldset className="button-input">
                    <input type="text" value={value} placeholder={placeholderText} />
                    <button>{buttonText}</button>
                </fieldset>
            </form>
        );
    }
}

InputForm.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    placeholderText: PropTypes.string,
    buttonText: PropTypes.string,
};

export default InputForm;