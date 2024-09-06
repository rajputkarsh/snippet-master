import {
  DeleteRounded,
  DragIndicatorOutlined,
  EditRounded,
} from "@mui/icons-material";
import { useGlobalContext } from "@/context";
import { SingleTagType } from "@/interfaces/context";

interface SingleTagProps {
  tag: SingleTagType;
}

function SingleTag({ tag }: SingleTagProps) {
  const {
    allNotesObject: { allNotes },
  } = useGlobalContext();

  const tagCount = allNotes.filter((note) => note.tags.some((noteTag) => noteTag.id === tag.id)).length;

  return (
    <div className="bg-white p-2 rounded-lg flex gap-3 items-center justify-between px-4">
      <div className="flex gap-3 items-center">
        <DragIndicatorOutlined className="text-slate-400 cursor-pointer" />
        <div className="w-2 h-2 bg-theme rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-bold">{tag.name}</span>
          <span className="text-slate-400 text-[12px]">
            {tagCount} Snippet{tagCount !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
          <EditRounded className="text-slate-400" sx={{ fontSize: 15 }} />
        </div>
        <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
          <DeleteRounded className="text-slate-400" sx={{ fontSize: 15 }} />
        </div>
      </div>
    </div>
  );
}

export default SingleTag;
