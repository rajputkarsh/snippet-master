
import { useGlobalContext } from "@/context";
import { Favorite } from "@mui/icons-material";

interface NoteHeaderProps {
  title: string;
  isFavorite: boolean;
}

function NoteHeader({ title, isFavorite }: NoteHeaderProps) {
  const {
    openNoteContentObject: { setOpenNoteContent },
  } = useGlobalContext();

  const handleSetOpenNoteContent = () => {
    setOpenNoteContent((_) => true);
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
        className={`cursor-pointer ${
          isFavorite
            ? "text-red-700 fill-red-700"
            : "text-slate-400"
        }`}
      />
    </div>
  );
}

export default NoteHeader