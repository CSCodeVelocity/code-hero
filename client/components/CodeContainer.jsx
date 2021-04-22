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

const CodeContainer = () => {
  const [state, dispatch] = useReducerThunk(codeReducer, initialCodeState);

  const writeToCodeState = action => {
    dispatch(action);
  };

  const fetchCodeBlock = path => {
    dispatch(async () => {
      const response = await fetch(path);
      const data = await response.json();
      console.log('data from server', data);
      dispatch({
        type: CODEBLOCK_SUCCEED,
        payload: { codeBlock: data.codeBlock },
      });
    });
  };

  return (
    <div>
      <CodeBlock
        codeBlock={state.codeBlock}
        fetchCodeBlock={fetchCodeBlock}
        writeToCodeState={writeToCodeState}
      />
      <CodeInput
        state={state}
        codeBlock={state.codeBlock}
        writeToCodeState={writeToCodeState}
      />
    </div>
  );
};

export default CodeContainer;
