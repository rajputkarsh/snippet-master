import { Dispatch, SetStateAction, useState } from "react";
import NoteContentTagsMenu from "./NoteContentTagsMenu";
import { StyleOutlined, EditOutlined } from "@mui/icons-material";
import { NO_TAGS_TEXT } from "@/constants/note";
import { SingleNoteType } from "@/interfaces/context";

interface INoteContentTagsProps {
  singleNote: SingleNoteType;
  setSingleNote: Dispatch<SetStateAction<SingleNoteType | undefined>>;
}

function NoteContentTags({ singleNote, setSingleNote }: INoteContentTagsProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="flex text-[13px] items-center gap-2">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-theme" : "text-slate-400"}`}
      />
      <div
        className="relative flex justify-between w-full"
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
              onClick={() => setIsOpened((_) => !isOpened)}
              className="text-slate-400 cursor-pointer"
            />
          )}
        </div>
        {isOpened && <NoteContentTagsMenu />}
      </div>
    </div>
  );
}

export default NoteContentTags;
