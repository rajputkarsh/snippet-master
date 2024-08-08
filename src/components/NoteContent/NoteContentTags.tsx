import { Dispatch, SetStateAction, useState } from "react";
import { StyleOutlined, EditOutlined } from "@mui/icons-material";
import { SingleNoteType } from "@/interfaces/context";
import { NO_TAGS_TEXT } from "@/constants/note";

interface INoteContentTagsProps {
  singleNote: SingleNoteType;
  setSingleNote: Dispatch<SetStateAction<SingleNoteType | undefined>>;
}

function NoteContentTags({ singleNote, setSingleNote }: INoteContentTagsProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="flex text-[13px] items-center gap-2">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-theme" : "text-slate-400"}`}
      />
      <div
        className="flex justify-between w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-2 items-center flex-wrap">
          {singleNote.tags.length > 0 ? (
            <>
              {singleNote.tags.map((tag, index) => (
                <div
                  key={`new_note_${singleNote.id}_${index}`}
                  className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md"
                >
                  {tag}
                </div>
              ))}
            </>
          ) : (
            <div className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md">
              {NO_TAGS_TEXT}
            </div>
          )}
          {hovered && (
            <EditOutlined
              sx={{ fontSize: 19 }}
              className="text-slate-400 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteContentTags;
