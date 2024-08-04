import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  KeyboardEvent,
} from "react";
import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";
import { TitleOutlined } from "@mui/icons-material";
import { TEXT_AREA_PLACEHOLDER } from "@/constants/note";

interface NoteContentHeaderProps {
  singleNote: SingleNoteType;
  setSingleNote: Dispatch<SetStateAction<SingleNoteType | undefined>>;
}

function NoteContentHeader({
  singleNote,
  setSingleNote,
}: NoteContentHeaderProps) {
  const {
    allNotesObject: { allNotes, setAllNotes },
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
    isNewNoteObject: { isNewNote, setIsNewNote },
  } = useGlobalContext();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleUpdate = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newSingleNote = { ...singleNote, title: event.target.value };
    setSingleNote(newSingleNote);

    const newAllNotes = allNotes.map((note) => {
      if (note.id === newSingleNote.id) {
        return newSingleNote;
      }
      return note;
    });
    setAllNotes((_) => newAllNotes);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Event') {
      event.preventDefault();
    }
  }

  return (
    <div className="flex justify-between gap-8 mb-4">
      <div className="flex gap-2 w-full">
        <TitleOutlined
          sx={{ fontSize: 19 }}
          className="text-slate-400 mt-[4px]"
        />
        <textarea
          ref={textAreaRef}
          placeholder={TEXT_AREA_PLACEHOLDER}
          value={singleNote.title}
          onChange={handleUpdate}
          onKeyDown={handleKeyDown}
          className="font-bold text-xl outline-none resize-none h-auto overflow-hidden w-full"
        />
      </div>
    </div>
  );

  // return (
  //   <input
  //     placeholder="Add new title"
  //     value={singleNote.title}
  //     onChange={handleUpdate}
  //   />
  // );
}

export default NoteContentHeader;
