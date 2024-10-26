import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IShareableNoteCodeBlockProps {
  code: string;
}

function ShareableNoteCodeBlock({ code }: IShareableNoteCodeBlockProps) {
  return (
    <div className="grow text-xs rounded-md overflow-hidden tet-sm bg-zinc-50">
      <SyntaxHighlighter language={"javascript"} style={materialLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default ShareableNoteCodeBlock;
