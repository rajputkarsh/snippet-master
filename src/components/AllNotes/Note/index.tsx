
import { useGlobalContext } from "@/context";
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
    <div className={`${isDarkModeEnabled ? 'bg-slate-800 text-white' : 'bg-white'} max-sm:w-full w-[320px] rounded-md py-4`}>
      <NoteHeader />
      <NoteDate />
      <NoteTags />
      <NoteDescription />
      <CodeBlock language="javascript" />
      <NoteFooter />  
    </div>
  );
}

export default Note;
