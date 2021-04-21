import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/mode/javascript/javascript.js';

const CodeBlock = props => {
  const stuff = "function stuff() {\n  console.log('what is up');\n}";
  return (
    <CodeMirror
      value={stuff}
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
};

export default CodeBlock;
