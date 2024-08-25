import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context";
import Note from "./Note";
import { SingleNoteType } from "@/interfaces/context";


export default function AllNotes() {
  const {
    openNoteContentObject: { openNoteContent },
    isMobileObject: { isMobile },
    allNotesObject: { allNotes },
  } = useGlobalContext();  

  const [notes, setNotes] = useState<Array<SingleNoteType>>(allNotes);

  useEffect(() => {
    const filteredNotes = allNotes
      .filter(
        (note) =>
        (note.title.length || note.description.length || note.code.length) && !note.isDeleted
      )
      .sort(
        (note1, note2) =>
          new Date(note2.createdOn).getTime() -
          new Date(note1.createdOn).getTime()
      );
    setNotes(() => filteredNotes);
  }, [allNotes])

  return (
    <div
      className={`mt-5 flex flex-wrap gap-4 ${
        openNoteContent ? `${isMobile ? "w-full" : "w-[50%]"}` : "w-full"
      }`}
    >
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
