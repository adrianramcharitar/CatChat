import React, { Component } from 'react';
import InputForm from './InputForm/InputForm.js';


class UserForm extends Component{
    constructor(props) {
        super(props);

        this.state ={
            userName: 'Bob',
        };
        this.setName = this.setName.bind(this);
    }

    setName(event){
        event.preventDefault();
        this.setState({
            userName: event.target.value,
        });
    }
    onJoin(event){
        event.preventDefault();
        console.log('event',event);
    }
    render() {
        const {userName} = this.state;
        return <InputForm
            value={userName}
            onChange={this.setName}
            onSubmit={this.onJoin}
            title="Join Chat"
            placeholderText="Enter your name"
            buttonText="Join" />
    }
}

export default UserForm;