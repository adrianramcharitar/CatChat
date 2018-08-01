import update from 'immutability-helper';
import { getTime } from 'date-fns';
import { users, messages } from '../api';

export const addMessage = sourceMessage => async dispatch => {
    // Prepare new message
    // Push the new message to the database
    // Update the user as no longer typing and with blank text
};

export const getMessages = () => async dispatch => {
    // Get all messages
    // Dispatch the action with the messages
};
