import { UserActionTypes } from './user.types';

// creating an action for reducer to execute
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
