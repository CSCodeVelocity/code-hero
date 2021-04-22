import React, { useEffect, useReducer, useCallback } from 'react';
import {
  CODEINPUT_INPUT_CODE,
  CODEBLOCK_SUCCEED,
  CODEBLOCK_WRITE_TO_BOX,
} from '../state/actions.js';
import { useReducerThunk } from '../state/customHooks.js';
import { initialCodeState, codeReducer } from '../state/reducers.js';
import CodeBlock from './CodeBlock.jsx';
import CodeInput from './CodeInput.jsx';

const CodeContainer = props => {
  const [state, dispatch] = useReducerThunk(codeReducer, initialCodeState);
  const { codeBlockId, setCodeBlockId } = props;

  const writeToCodeState = action => {
    dispatch(action);
  };

  const writeToPlayersState = data => {
    const { playersState, setPlayersState } = props;
    const thing = [...playersState];
    thing[0].percentage = data.percentage;
    setPlayersState([...thing]);
  };

  const fetchCodeBlock = path => {
    dispatch(async () => {
      const response = await fetch(path);
      const data = await response.json();
      console.log('data from server', data);
      dispatch({
        type: CODEBLOCK_SUCCEED,
        payload: { codeBlock: data.text },
      });
      setCodeBlockId(data.id);
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <CodeBlock
        codeBlock={state.codeBlock}
        fetchCodeBlock={fetchCodeBlock}
        writeToCodeState={writeToCodeState}
      />
      <CodeInput
        correctChars={state.correctChars}
        totalChars={state.totalChars}
        codeBlock={state.codeBlock}
        writeToCodeState={writeToCodeState}
        writeToPlayersState={writeToPlayersState}
      />
    </div>
  );
};

export default CodeContainer;
