/* Reducers for authentication */
export const initialAuthState = {};
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SOME_ACTION_TYPE':
      return {
        ...state,
        // Some changed state to go here
      };
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

export const initialStartGameState = {
  countDown: 5,
  playersJoined: 1,
};

export const startGameReducer = (state, action) => {
  switch (action.type) {
    case 'COUNT_DOWN':
      return {
        ...state,
        countDown: action.payload.countDown,
      };
    case 'UPDATE_PLAYERS':
      return {
        ...state,
        playersJoined: action.payload.playersJoined,
      };
  }
};
