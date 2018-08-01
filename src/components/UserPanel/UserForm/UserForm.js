import React, { Component } from 'react';
import InputForm from './InputForm/InputForm.js';


class UserForm extends Component{
    onJoin(event){
        console.log('event',event);
    }
    render() {
        return <InputForm  onSubmit={this.onJoin} title="Join Chat" placeholderText="Enter your name" buttonText="Join" />
    }
}

export default UserForm;