import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";
import { useEffect, useState } from "react";
import NoteContentHeader from "./NoteContentHeader";
import NoteContentTags from "./NoteContentTags";

function NoteContent() {
  const {
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
    isMobileObject: { isMobile },
    selectedNoteObject: { selectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(undefined);

  useEffect(() => {
    if(openNoteContent && selectedNote) {
      setSingleNote((_) => selectedNote);
    }
  }, [openNoteContent, selectedNote]);

  useEffect(() => {
    if(isNewNote && singleNote && !!singleNote.title ) {
      setAllNotes((_) => [singleNote, ...allNotes]);
      setIsNewNote((_) => false);
    }
  }, [singleNote]);

  return (
    <div
      className={`border ${
        isMobile ? "w-4/5" : "w-1/2"
      } bg-white p-3 rounded-lg ${
        openNoteContent ? "block" : "hidden"
      } h-[700px]
      ${
        isMobile
          ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          : ""
      }`}
    >
      {singleNote && (
        <>
          <NoteContentHeader
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
          <NoteContentTags
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
        </>
      )}
    </div>
  );
}

export default NoteContent;
