import { correctlyTypedChars } from '../utils/compare.js';
import * as actionTypes from './actions.js';

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

export const initialCodeState = {
  codeBlock: '', // fetched from server
  codeBlockCm: [],
  codeInputCm: [],
  codeBlockStringified: '',
  codeInputStringified: '',
  correctChars: 0,
  totalChars: 0,
};
export const codeReducer = (state, action) => {
  console.log('action in reducer', action);
  console.log('current state', state);
  if (action.type === actionTypes.CODEINPUT_INPUT_CODE) {
    const { codeInputStringified } = action.payload;
    const { codeBlockStringified } = state;
    const correctChars = correctlyTypedChars(
      codeBlockStringified,
      codeInputStringified,
      state.correctChars
    );
    const updates = {
      codeInputStringified,
      correctChars,
    };

    return { ...state, ...updates };
  }
  if (action.type === actionTypes.CODEBLOCK_REQUEST) {
    return { ...state, ...action.payload };
  }
  if (action.type === actionTypes.CODEBLOCK_SUCCEED) {
    return { ...state, ...action.payload };
  }
  if (action.type === actionTypes.CODEBLOCK_FAIL) {
    return { ...state, ...action.payload };
  }
  if (action.type === actionTypes.CODEBLOCK_WRITE_TO_BOX) {
    const { codeBlockStringified, newLineCount } = action.payload;
    const updates = {
      codeBlockStringified,
      totalChars: codeBlockStringified.length - newLineCount,
    };
    return { ...state, ...updates };
  }
  return state;
};
