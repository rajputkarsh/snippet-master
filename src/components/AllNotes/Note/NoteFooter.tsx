
import { DeleteRounded } from "@mui/icons-material";
import { SiJavascript } from "react-icons/si";

function NoteFooter() {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex ggap-1 items-center">
        <SiJavascript size={15} className="mb-[2px]" />
      </div>
      <DeleteRounded sx={{fontSize: 17}} className="cursor-pointer" />
    </div>
  );
}

export default NoteFooter