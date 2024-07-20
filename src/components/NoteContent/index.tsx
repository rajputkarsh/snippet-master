import { useGlobalContext } from "@/context";

function NoteContent() {
  const {
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
    isMobileObject: { isMobile },
  } = useGlobalContext();

  return (
    <div
      className={`border ${
        isMobile ? "w-4/5" : "w-1/2"
      } bg-white p-3 rounded-lg ${
        openNoteContent ? "block" : "hidden"
      } h-[700px]
      ${
        isMobile
          ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          : ""
      }`}
    >
      NoteContent
      <div onClick={() => setOpenNoteContent(false)}>close</div>
    </div>
  );
}

export default NoteContent;
