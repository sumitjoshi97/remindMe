import {ADD-REMINDER} from '../constants';

export const addReminder = (text) => {
	const action = {
		type: ADD_REMINDER,
		text
	}
	console.log('actiob in addReminder'\, action);
	return action; 
}