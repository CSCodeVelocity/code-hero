/* Reducers for authentication */
export const initialAuthState = {
  isOnline: false,
  signUp: false,
  username: '',
  userId: 0,
};
export const authReducer = (state, action) => {
  switch (action.type) {
    /* When user login is successful, here we update that data for the game to render and fetch other user data */
    case 'LOGGED_IN': {
      const { username, userId, isOnline } = action.payload;
      console.log('LOGGED_IN ISONLINE: ', isOnline);
      return {
        ...state,
        username,
        userId,
        isOnline,
      };
    }
    /* When a new user successfully signs up, here we update user data (just as above) and change signUp to false which renders the login form*/
    case 'SIGNED_UP': {
      const { username, userId, isOnline, signUp } = action.payload;
      console.log('SIGNED_UP SIGNUP: ', signUp);
      return {
        ...state,
        username,
        userId,
        isOnline,
        signUp,
      };
    }
    /* This is done to modulate between signup and login forms in AuthForm component */
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
