
import { FavoriteBorderOutlined } from "@mui/icons-material";

function NoteHeader() {
  return (
    <div className="flex justify-between mx-4">
      <span className="font-bold text-lg w-[87%]">
        bla bla blaaaa
      </span>

      <FavoriteBorderOutlined className="text-slate-400 cursor-pointer" />
    </div>
  )
}

export default NoteHeader