
interface NoteTagsProps {
  id: string;
  tags: Array<string>;
}

function NoteTags({ id, tags }: NoteTagsProps) {
  return (
    <div className="text-slate-500 text-[11px] mx-4 flex flex-wrap gap-1 mt-4">
      {tags.map((tag) => (
        <span
          key={`${id}_${tag}`}
          className="bg-purple-100 text-purple-600 p-1 rounded-md px-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default NoteTags;
