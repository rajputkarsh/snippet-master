import { useGlobalContext } from "@/context";
import SingleTag from "./SingleTag";

function TagsList() {
  const {
    allTagsObject: { allTags },
  } = useGlobalContext();

  return (
    <div className="rounded-md p-4 bg-slate-50 h-[380px] overflow-auto mt-9 flex flex-col gap-4">
      {
        allTags.map((tag) => (
          <SingleTag key={tag.id} tag={tag} />
        ))
      }
    </div>
  );
}

export default TagsList;
