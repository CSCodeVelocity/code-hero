import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/mode/javascript/javascript.js';

function CodeInput() {
  return (
    <CodeMirror
      value={'what up'}
      options={{
        mode: 'javascript',
        theme: 'gruvbox-dark',
        lineNumbers: true,
        lineWrapping: true,
        maxHighlightLength: Infinity,
        tabSize: 2,
        readOnly: false,
      }}
    />
  );
}

export default CodeInput;
