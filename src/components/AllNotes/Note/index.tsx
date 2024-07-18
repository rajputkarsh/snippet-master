import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useGlobalContext } from "@/context";
import { DeleteRounded } from "@mui/icons-material";
import { SiJavascript } from "react-icons/si";
import { isDarkMode } from "@/lib/utils";
import NoteHeader from "./NoteHeader";
import NoteDate from "./NoteDate";
import NoteTags from "./NoteTags";
import NoteDescription from "./NoteDescription";
import CodeBlock from "./CodeBlock";
import NoteFooter from "./NoteFooter";

function Note() {
  const { darkModeObject: { darkMode } } = useGlobalContext();
  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div className={`${isDarkModeEnabled ? 'bg-slate-800 text-white' : 'bg-white'} max-sm:w-full w-[320px] rounded`}>
      <NoteHeader />
      <NoteDate />
      <NoteTags />
      <NoteDescription />
      <CodeBlock language="javscript" />
      <NoteFooter />  
    </div>
  );
}

export default Note;
