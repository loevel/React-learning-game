import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import * as Babel from '@babel/standalone';

const initialCode = `
import React from 'react';

const HelloWorld = () => {
  return (
    <div>
      Hello, World!
    </div>
  );
};

export default HelloWorld;
`;

const GamePage = () => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const handleRunCode = () => {
    try {
      const compiledCode = Babel.transform(code, { presets: ['react'] }).code;
      setOutput(compiledCode);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="gamepage">
      <h2>Level 1: Creating Components</h2>
      <p>Create a simple React component that displays "Hello, World!"</p>
      <CodeEditor initialCode={initialCode} onCodeChange={setCode} />
      <button onClick={handleRunCode}>Run Code</button>
      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default GamePage;
