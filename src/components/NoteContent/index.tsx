import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";
import { useEffect, useState } from "react";

function NoteContent() {
  const {
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
    isMobileObject: { isMobile },
    selectedNoteObject: { selectedNote },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(undefined);

  useEffect(() => {
    if(openNoteContent && selectedNote) {
      setSingleNote((_) => selectedNote);
    }
  }, [openNoteContent, selectedNote]);

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
        <NoteContentHeader
          singleNote={singleNote}
          setSingleNote={setSingleNote}
        />
      )}
      <div onClick={() => setOpenNoteContent(false)}>close</div>
    </div>
  );
}

export default NoteContent;
