/* eslint-disable import/prefer-default-export */

// creating an action for reducer to execute
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
