import appConfig from '../../shared/appConfig';
import { users } from '../api';

export const addUser = sourceUser => async dispatch => {
    // Prepare new user
    // Push the new user to the database
    // Save as the current user
    // Dispatch the user action
};

export const userChatInput = sourceUser => async dispatch => {
    // Update the user in the database
    // Save as the current user
    // Dispatch the user action
};

export const getUsers = () => async dispatch => {
    users.on('value', dataSnapshot => {
        // Set the current user
    });
};
