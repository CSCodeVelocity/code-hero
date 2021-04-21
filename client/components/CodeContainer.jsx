import React from 'react';
import CodeBlock from './CodeBlock.js';
import CodeInput from './CodeInput.js';

const initialState = {
  codeBlock: '',// fetched from server
  codeInput: '',
};

const CODEBLOCK_ADD_CODE = 'CODEBLOCK_ADD_CODE' ;

const reducer = (state, action) {
  if (action.type === CODEBLOCK_ADD_CODE){
    return { ...state, action.payload };
  }
  return state;
}

function App() {
  const [codeTyped, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>Test stuff</span>
      <CodeBlock />
      <CodeInput />
    </div>
  );
}

export default App;

