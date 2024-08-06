import { useState } from "react";
import { StyleOutlined, EditOutlined } from "@mui/icons-material";
import { SingleNoteType } from "@/interfaces/context";

interface INoteContentTagsProps {
  note: SingleNoteType;
}

function NoteContentTags({ note }: INoteContentTagsProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex text-[13px] items-center gap-2">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-purple-600" : "text-slate-400"}`}
      />
      <div
        className="flex justify-between w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-2 items-center flex-wrap">
          {
            note.tags.map((tag, index) => (
              <div
                key={`new_note_${note.id}_${index}`}
                className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md"
              >
                {tag}
              </div>
            ))
          }
          {
            hovered && (
              <EditOutlined
                sx={{fontSize: 19}}
                className="text-slate-400 cursor-pointer"
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default NoteContentTags;
