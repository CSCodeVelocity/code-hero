import React, { useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { CODEBLOCK_WRITE_TO_BOX } from '../state/actions.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/mode/javascript/javascript.js';

const CodeBlock = props => {
  const { codeBlock, fetchCodeBlock, writeToCodeState } = props;

  const grabCmCode = e => {
    const content = e.display.view.map(stuff => {
      return stuff.text.textContent;
    });
    writeToCodeState({
      type: CODEBLOCK_WRITE_TO_BOX,
      payload: {
        codeBlockStringified: content.join('\n'),
        newLineCount: content.length - 1,
      },
    });
    console.log('codeblock:', content);
  };

  useEffect(() => {
    fetchCodeBlock('/codeblock.json');
  }, []);

  return (
    <div
      style={{
        border: '2px solid red',
      }}
    >
      <CodeMirror
        value={codeBlock}
        onUpdate={grabCmCode}
        options={{
          mode: 'javascript',
          theme: 'gruvbox-dark',
          lineNumbers: true,
          lineWrapping: true,
          maxHighlightLength: Infinity,
          tabSize: 2,
          readOnly: true,
        }}
      />
    </div>
  );
};

export default CodeBlock;
