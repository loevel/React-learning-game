import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ initialCode, onCodeChange }) => {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value) => {
    setCode(value);
    onCodeChange(value);
  };

  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={handleEditorChange}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
