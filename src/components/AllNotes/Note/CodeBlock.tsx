import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";

interface CodeBlockProps {
  language: string;
}

function CodeBlock({ language }: CodeBlockProps) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const CODE_STRING = `
    import React from 'react';
    function HelloWorld() {
      return (
        <h1>Hello World !</h1>
      );
    }

    export default HelloWorld  
  `;

  return (
    <div className="rounded-md overflow-hidden tet-sm">
      <SyntaxHighlighter
        language={language}
        style={isDarkModeEnabled ? oneDark : materialLight}
      >
        {CODE_STRING}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock