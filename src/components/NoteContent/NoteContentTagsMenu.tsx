import { useGlobalContext } from "@/context";
import { SingleTagType } from "@/interfaces/context";

interface NoteContentTagsMenuProps {
  tags: Array<SingleTagType>;
  handleTagClick: (tag: SingleTagType) => void;
}

function NoteContentTagsMenu({
  tags,
  handleTagClick,
}: NoteContentTagsMenuProps) {
  const {
    allTagsObject: { allTags },
  } = useGlobalContext();

  return (
    <ul className="absolute top-10 bg-slate-100 w-[60%] p-3 rounded-md flex flex-col gap-2">
      {allTags.map((tag) => (
        <li
          key={`available_tag${tag.id}`}
          onClick={() => handleTagClick(tag)}
          className={`
              ${tags.some((t) => t.id === tag.id) ? "bg-slate-300" : ""}
              p-1 px-2 select-none cursor-pointer hover:bg-slate-300 text-slate-500 rounded-md transition-all
            `}
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
}

export default NoteContentTagsMenu;
