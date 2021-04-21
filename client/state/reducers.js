/* Reducers for authentication */
export const initialAuthState = {
  isOnline: false,
  signUp: false,
  username: '',
  userId: 0,
};
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGGED_IN': {
      const { username, userId, isOnline } = action.payload;
      console.log('IN AUTHREDUCER: ', action.payload);
      return {
        ...state,
        username,
        userId,
        isOnline,
      };
    }
  }
};
/* Reducers for the game */
export const initialGameState = {};
export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SOME_ACTION_TYPE':
      return {
        ...state,
        // Some changed state to go here
      };
  }
};
