
import { useGlobalContext } from "@/context";
import { FavoriteBorderOutlined } from "@mui/icons-material";

function NoteHeader() {

  const {
    openNoteContentObject: {setOpenNoteContent}
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
        bla bla blaaaa
      </span>

      <FavoriteBorderOutlined className="text-slate-400 cursor-pointer" />
    </div>
  );
}

export default NoteHeader