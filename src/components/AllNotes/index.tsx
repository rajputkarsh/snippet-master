import { useGlobalContext } from "@/context";
import Note from "./Note";


export default function AllNotes() {
  const {
    darkModeObject: { darkMode },
    openNoteContentObject: { openNoteContent },
    isMobileObject: { isMobile },
  } = useGlobalContext();  
  return (
    <div
      className={`mt-5 flex flex-wrap gap-4 ${
        openNoteContent ? `${isMobile ? "w-full" : "w-[50%]"}` : "w-full"
      }`}
    >
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
}
