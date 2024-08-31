import SingleTag from "./SingleTag"

function TagsList() {
  return (
    <div className="rounded-md p-4 bg-slate-50 h-[380px] overflow-auto mt-9 flex flex-col gap-4">
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
    </div>
  );
}

export default TagsList