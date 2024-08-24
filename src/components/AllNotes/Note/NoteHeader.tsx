import { useGlobalContext } from "@/context";
import { SingleNoteType } from "@/interfaces/context";
import { Favorite } from "@mui/icons-material";

interface NoteHeaderProps {
  id: string;
  title: string;
  isFavorite: boolean;
}

function NoteHeader({ id, title, isFavorite }: NoteHeaderProps) {
  const {
    openNoteContentObject: { setOpenNoteContent },
    allNotesObject: { allNotes, setAllNotes },
    selectedNoteObject: { setSelectedNote },
  } = useGlobalContext();

  const handleSetOpenNoteContent = () => {
    setOpenNoteContent((_) => true);
    const currentNote = allNotes.find((note) => note.id === id);
    setSelectedNote((_) => currentNote || null);
  };

  const handleFavoriteUpdate = () => {
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
  };

  return (
    <div className="flex justify-between mx-4">
      <span
        className="font-bold text-lg w-[87%] cursor-pointer hover:text-theme transition duration-150"
        onClick={handleSetOpenNoteContent}
      >
        {title}
      </span>

      <Favorite
        onClick={handleFavoriteUpdate}
        className={`cursor-pointer ${
          isFavorite ? "text-red-700 fill-red-700" : "text-slate-400"
        }`}
      />
    </div>
  );
}

export default NoteHeader;
