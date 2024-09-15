import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";
import { useEffect, useState } from "react";
import NoteContentHeader from "./NoteContentHeader";
import NoteContentTags from "./NoteContentTags";
import { isDarkMode } from "@/lib/utils";
import NoteContentDescription from "./NoteContentDescription";
import NoteContentCodeBlock from "./NoteContentCodeBlock";
import toast from "react-hot-toast";

function NoteContent() {
  const {
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
    isMobileObject: { isMobile },
    selectedNoteObject: { selectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
    darkModeObject: { darkMode },
    clerkUserIdObject: { clerkUserId },
  } = useGlobalContext();

    const isDarkModeEnabled = isDarkMode(darkMode);

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(undefined);

  useEffect(() => {
    if(openNoteContent && selectedNote) {
      setSingleNote((_) => selectedNote);
    }
  }, [openNoteContent, selectedNote]);

  useEffect(() => {
    if(isNewNote && singleNote && !!singleNote.title ) {

      // add note in DB
      saveNoteInDB();

      setAllNotes((_) => [singleNote, ...allNotes]);
      setIsNewNote((_) => false);
    }
  }, [singleNote]);

  const saveNoteInDB = async () => {
    try {
      const response = await fetch(`/api/snippets`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        }, 
        body: JSON.stringify({ ...singleNote, clerkUserId })
      });

      if(!response.ok) {
        toast.error("Error: Something went wrong");
      } else {
        const data = await response.json();
        toast.success(data.message);
      }
    } catch(error: any) {
      toast.error('Error: ', error?.message || error);
    }
  }

  return (
    <div
      className={`border ${isMobile ? "w-4/5" : "w-1/2"} shadow-2xl p-3 rounded-lg ${
        openNoteContent ? "block" : "hidden"
      } h-[700px]
      ${
        isMobile
          ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          : ""
      }
      ${isDarkModeEnabled ? "bg-slate-800" : "bg-white"}    
      `}
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
          <NoteContentDescription
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
          <NoteContentCodeBlock
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
        </>
      )}
    </div>
  );
}

export default NoteContent;
