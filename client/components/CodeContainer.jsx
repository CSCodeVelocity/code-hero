import React, { useEffect, useReducer } from 'react';
import useReducerThunk from '../state/customHooks.js';
import { initialCodeState, codeReducer } from '../state/reducers.js';
import CodeBlock from './CodeBlock.jsx';
import CodeInput from './CodeInput.jsx';

const CodeContainer = () => {
  const [state, dispatch] = useReducerThunk(codeReducer, initialCodeState);
  useEffect(async () => {
    const response = await fetch('../../data/codeblock.json');
    console.log(response);
  });
  return (
    <div>
      <span>Test stuff</span>
      <CodeBlock code={} />
      <CodeInput />
    </div>
  );
};

export default CodeContainer;
