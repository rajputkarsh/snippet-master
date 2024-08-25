
import { AVAILABLE_LANGUAGES } from "@/constants/languages";
import { useGlobalContext } from "@/context";
import { SingleLanguageType } from "@/interfaces/context";
import { DeleteRounded } from "@mui/icons-material";

interface NoteFooterProps {
  id: string;
  language: string;
}

function NoteFooter({ id, language }: NoteFooterProps) {
  const {
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();  

  const currentLanguage: SingleLanguageType =
    AVAILABLE_LANGUAGES.find(
      (lang) => lang.name.trim().toLowerCase() === language.trim().toLowerCase()
    ) || AVAILABLE_LANGUAGES[0];

    const handleNoteDelete = () => {
      const newAllNotes = allNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isFavorite: !note.isFavorite,
          };
        }
        return note;
      });
      setAllNotes((_) => newAllNotes);      
    }

  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center">
        {currentLanguage.icon}
        <span className="capitalize">{currentLanguage.name}</span>
      </div>
      <DeleteRounded onClick={handleNoteDelete} sx={{ fontSize: 17 }} className="cursor-pointer" />
    </div>
  );
}

export default NoteFooter