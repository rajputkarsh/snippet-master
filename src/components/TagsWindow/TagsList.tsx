import { useGlobalContext } from "@/context";
import SingleTag from "./SingleTag";

interface TagListProps {
  tagSearch: string;
}

function TagsList({ tagSearch }: TagListProps) {
  const {
    allTagsObject: { allTags },
  } = useGlobalContext();



  return (
    <div className="rounded-md p-4 bg-slate-50 h-[380px] overflow-auto mt-9 flex flex-col gap-4">
      {allTags.filter((tag) => tag.name.toLowerCase().includes((tagSearch || "").trim().toLowerCase())).map((tag) => (
        <SingleTag key={tag.id} tag={tag} />
      ))}
    </div>
  );
}

export default TagsList;
