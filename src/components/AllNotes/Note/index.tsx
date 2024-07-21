
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import NoteHeader from "./NoteHeader";
import NoteDate from "./NoteDate";
import NoteTags from "./NoteTags";
import NoteDescription from "./NoteDescription";
import CodeBlock from "./CodeBlock";
import NoteFooter from "./NoteFooter";
import { SingleNoteType } from "@/interfaces/context";

interface NoteProps {
  note: SingleNoteType
}

function Note({ note }: NoteProps) {
  const {
    darkModeObject: { darkMode },
    openNoteContentObject: { openNoteContent },
  } = useGlobalContext();
  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div
      className={`${
        isDarkModeEnabled ? "bg-slate-800 text-white" : "bg-white"
      } max-sm:w-full ${
        openNoteContent ? "w-full" : "w-[380px]"
      } rounded-md py-4`}
    >
      <NoteHeader title={note.title} isFavorite={note.isFavorite} />
      <NoteDate date={note.createdOn} />
      <NoteTags id={note.id} tags={note.tags} />
      <NoteDescription />
      <CodeBlock language="javascript" />
      <NoteFooter />
    </div>
  );
}

export default Note;
