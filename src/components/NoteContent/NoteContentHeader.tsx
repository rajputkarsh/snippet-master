import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";

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
  } = useGlobalContext();
  
  const handleUpdate = (event: ChangeEvent<HTMLInputElement>): void => {
    const newSingleNote = { ...singleNote, title: event.target.value };
    setSingleNote(newSingleNote);

    const newAllNotes = allNotes.map((note) => {
      if(note.id === newSingleNote.id) {
        return newSingleNote;
      }
      return note;
    });

    setAllNotes((_) => newAllNotes);
  }

  return (
    <input
      placeholder="Add new title"
      value={singleNote.title}
      onChange={handleUpdate}
    />
  );
}

export default NoteContentHeader;
