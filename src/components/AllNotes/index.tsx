import { useGlobalContext } from "@/context";
import Note from "./Note";


export default function AllNotes() {
  const {
    openNoteContentObject: { openNoteContent },
    isMobileObject: { isMobile },
    allNotesObject: { allNotes },
  } = useGlobalContext();  
  return (
    <div
      className={`mt-5 flex flex-wrap gap-4 ${
        openNoteContent ? `${isMobile ? "w-full" : "w-[50%]"}` : "w-full"
      }`}
    >
      {
        allNotes.map((note) => (
          <Note key={note.id} note={note}/>
        ))
      }
    </div>
  );
}
