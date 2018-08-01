import React, { Component } from 'react';
import './InputForm.css';
import PropTypes from 'prop-types';

class InputForm extends Component {
    render() {
        const { title, value, placeholderText, buttonText, onSubmit, onChange } = this.props;
        return (
            <form className="InputForm" onSubmit={onSubmit}>
                <header>{title}</header>
                <fieldset className="button-input">
                    <input onChange={onChange} type="text" value={value} placeholder={placeholderText} />
                    <button>{buttonText}</button>
                </fieldset>
            </form>
        );
    }
}

InputForm.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholderText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputForm;