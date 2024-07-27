
import { useGlobalContext } from "@/context";
import { SNIPPET } from "@/constants/config";

export default function AddSnippetButton() {
  const {
    darkModeObject: { darkMode },
    openNoteContentObject: { openNoteContent },
    isMobileObject: { isMobile },
    allNotesObject: { allNotes },
  } = useGlobalContext();  

  return (
    <div className="absolute flex gap-2 px-3 rounded-3xl bg-purple-600 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none">
      <div className="font-bold">+</div>
      <div className="max-md:hidden">{SNIPPET}</div>
    </div>
  );
}
