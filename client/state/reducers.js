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
  gameStart: false,
  playersJoined: 1,
};

export const startGameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_GAME':
      return {
        ...state,
        gameStart: action.payload.gameStart,
      };
    case 'UPDATE_PLAYERS':
      return {
        ...state,
        playersJoined: action.payload.playersJoined,
      };
  }
};
