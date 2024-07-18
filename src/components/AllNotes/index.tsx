import Note from "./Note";


export default function AllNotes() {
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
}
