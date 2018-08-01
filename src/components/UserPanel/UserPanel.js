import React, { Component } from 'react';
import UserForm from './UserForm/UserForm.js';
import './UserPanel.css';

class UserPanel extends Component {
    render() {
        return (
            <aside className="UserPanel">
                <UserForm />
            </aside>
        );
    }
}

export default UserPanel;
