import { AVAILABLE_TAGS } from "@/constants/note"
import { SingleTagType } from "@/interfaces/context";

interface NoteContentTagsMenuProps {
  tags: Array<SingleTagType>,
  handleTagClick: (tag: SingleTagType) => void
}

function NoteContentTagsMenu(tags: NoteContentTagsMenuProps) {
  return (
    <ul className="absolute top-10 bg-slate-100 w-[60%] p-3 rounded-md flex flex-col gap-2">
      {AVAILABLE_TAGS.map((tag) => (
        <li
          key={`available_tag${tag.id}`}
          className="p-1 px-2 select-none cursor-pointer hover:bg-slate-300 text-slate-500 rounded-md transition-all"
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
}

export default NoteContentTagsMenu