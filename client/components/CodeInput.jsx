import React, { useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { CODEINPUT_INPUT_CODE } from '../state/actions.js';
import { correctChars } from '../utils/compare.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/mode/javascript/javascript.js';

const CodeInput = props => {
  const { codeBlock, writeToCodeState } = props;

  const grabCmCode = e => {
    const content = e.display.view
      .map(stuff => {
        return stuff.text.textContent;
      })
      .join('\n');

    writeToCodeState({
      type: CODEINPUT_INPUT_CODE,
      payload: { codeInputStringified: content },
    });
    console.log('codeinput:', content);
  };

  return (
    <CodeMirror
      onUpdate={grabCmCode}
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

export default CodeInput;
