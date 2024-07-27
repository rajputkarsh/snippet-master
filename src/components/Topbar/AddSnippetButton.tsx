
import { useGlobalContext } from "@/context";
import { SNIPPET } from "@/constants/config";
import { SingleNoteType } from "@/interfaces/context";

export default function AddSnippetButton() {
  const {
    allNotesObject: { allNotes, setAllNotes },
    selectedNoteObject: { selectedNote, setSelectedNote },
    openNoteContentObject: { openNoteContent, setOpenNoteContent },
  } = useGlobalContext();  

  const openNewNoteContent = () => {
    const newSingleNote: SingleNoteType = {
      id: crypto.randomUUID(),
      title: "",
      isFavorite: false,
      tags: [],
      description: "",
      code: "",
      language: "",
      createdOn: "",      
    };

    setAllNotes((_) => [...allNotes, newSingleNote]);
    setSelectedNote((_) => newSingleNote);
    setOpenNoteContent((_) => true);
  }

  return (
    <div
      onClick={openNewNoteContent}
      className="absolute flex gap-2 px-3 rounded-3xl bg-purple-600 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none"
    >
      <div className="font-bold">+</div>
      <div className="max-md:hidden">{SNIPPET}</div>
    </div>
  );
}
