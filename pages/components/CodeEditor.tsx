// components/Editor.tsx
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import dynamic from "next/dynamic";

interface EditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const CodeEditor: React.FC<EditorProps> = ({
  value,
  onChange,
  readOnly = false,
}) => {
  return (
    <CodeMirror
      value={value}
      height="300px"
      extensions={[javascript({ jsx: true })]}
      theme={oneDark}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default CodeEditor;
