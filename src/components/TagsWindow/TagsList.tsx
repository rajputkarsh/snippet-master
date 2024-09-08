import { useGlobalContext } from "@/context";
import SingleTag from "./SingleTag";
import { isDarkMode } from "@/lib/utils";

interface TagListProps {
  tagSearch: string;
}

function TagsList({ tagSearch }: TagListProps) {
  const {
    allTagsObject: { allTags },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);


  return (
    <div
      className={`rounded-md p-4 h-[380px] overflow-auto mt-9 flex flex-col gap-4 ${isDarkModeEnabled ? "bg-slate-600" : "bg-slate-50"}`}
    >
      {allTags
        .filter((tag) =>
          tag.name
            .toLowerCase()
            .includes((tagSearch || "").trim().toLowerCase())
        )
        .map((tag) => (
          <SingleTag key={tag.id} tag={tag} />
        ))}
    </div>
  );
}

export default TagsList;
