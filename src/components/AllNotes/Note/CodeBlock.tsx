import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";

interface CodeBlockProps {
  language: string;
  code: string;
}

function CodeBlock({ language, code }: CodeBlockProps) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div className="text-xs rounded-md overflow-hidden tet-sm">
      <SyntaxHighlighter
        language={language}
        style={isDarkModeEnabled ? oneDark : materialLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock