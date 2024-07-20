import { useGlobalContext } from "@/context";

function NoteContent() {
  const {
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
  } = useGlobalContext();

  return (
    <div className={`border w-1/2 bg-white p-3 rounded-lg ${openNoteContent ? 'block' : 'hidden'} h-[700px]`}>
      NoteContent
      <div onClick={() => setOpenNoteContent(false)}>close</div>
    </div>
  );
}

export default NoteContent;
