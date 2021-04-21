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
      return {
        ...state,
        username,
        userId,
        isOnline,
      };
    }

    case 'SET_SIGNUP': {
      const { signUp } = action.payload;
      return {
        ...state,
        signUp,
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
