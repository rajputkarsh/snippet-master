import {
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { DESCRIPTION_TEXT_AREA_PLACEHOLDER } from "@/constants/note";
import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";
import { isDarkMode } from "@/lib/utils";
import { DescriptionOutlined } from "@mui/icons-material";

interface INoteContentDescriptionProps {
  singleNote: SingleNoteType;
  setSingleNote: Dispatch<SetStateAction<SingleNoteType | undefined>>;
}

function NoteContentDescription({
  singleNote,
  setSingleNote,
}: INoteContentDescriptionProps) {
  const {
    allNotesObject: { allNotes, setAllNotes },
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
    isNewNoteObject: { isNewNote, setIsNewNote },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleUpdate = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newSingleNote: SingleNoteType = { ...singleNote, description: event.target.value };
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
    if (event.key === "Event") {
      event.preventDefault();
    }
  };

  return (
    <div className="flex gap-2 text-[12px] mt-8">
      <DescriptionOutlined
        sx={{ fontSize: 18 }}
        className={`mt-[9px] ${isHovered ? "text-theme" : "text-slate-400"}`}
      />
      <textarea
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onChange={handleUpdate}
        onKeyDown={handleKeyDown}
        placeholder={DESCRIPTION_TEXT_AREA_PLACEHOLDER}
        className={`text-sm outline-none border ${
          isHovered ? "border-theme" : ""
        } rounded-lg p-2 w-full ${
          isDarkModeEnabled ? "bg-slate-800 text-white" : "bg-white"
        }`}
      />
    </div>
  );
}

export default NoteContentDescription;
