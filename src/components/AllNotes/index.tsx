import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context";
import Note from "./Note";
import { SingleNoteType } from "@/interfaces/context";
import { getSelectedSidebarItem } from "@/lib/utils";

export default function AllNotes() {
  const {
    openNoteContentObject: { openNoteContent },
    sidebarMenuObject: { sidebarMenu },
    isMobileObject: { isMobile },
    allNotesObject: { allNotes },
    selectedNoteObject: { setSelectedNote },
    openNoteContentObject: { setOpenNoteContent },
    isNewNoteObject: { setIsNewNote },
  } = useGlobalContext();

  const [notes, setNotes] = useState<Array<SingleNoteType>>(allNotes);

  const selectedSidebarItem = getSelectedSidebarItem(sidebarMenu)
    .trim()
    .toLowerCase();

  useEffect(() => {
    let filteredNotes: Array<SingleNoteType> = [];
    if (selectedSidebarItem === "favorites") {
      filteredNotes = allNotes.filter(
        (note) =>
          (note.title.length || note.description.length || note.code.length) &&
          !note.isDeleted &&
          note.isFavorite
      );
    } else if (selectedSidebarItem === "trash") {
      filteredNotes = allNotes.filter(
        (note) =>
          (note.title.length || note.description.length || note.code.length) &&
          note.isDeleted
      );
    } else {
      filteredNotes = allNotes.filter(
        (note) =>
          (note.title.length || note.description.length || note.code.length) &&
          !note.isDeleted
      );
    }

    filteredNotes = filteredNotes.sort(
      (note1, note2) =>
        new Date(note2.createdOn).getTime() -
        new Date(note1.createdOn).getTime()
    );
    setNotes(() => filteredNotes);
  }, [allNotes, selectedSidebarItem]);

  const openNewNoteContent = () => {
    const newSingleNote: SingleNoteType = {
      id: crypto.randomUUID(),
      title: "",
      isFavorite: false,
      tags: [],
      description: "",
      code: "",
      language: AVAILABLE_LANGUAGES[0].name,
      isDeleted: false,
      createdOn: new Date().toISOString(),
    };

    setIsNewNote((_) => true);
    setSelectedNote((_) => newSingleNote);
    setOpenNoteContent((_) => true);
  };

  return (
    <div
      className={`mt-5 flex flex-wrap gap-4 ${
        openNoteContent ? `${isMobile ? "w-full" : "w-[50%]"}` : "w-full"
      } ${!notes.length ? "items-center justify-center" : ""}`}
    >
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      {!notes.length && (
        <div className="flex flex-col justify-center items-center">
          <img src="/no-items-found.webp" />
          {selectedSidebarItem === "all snippets" ? (
            <button
              onClick={openNewNoteContent}
              className="w-fit bg-theme text-white p-[8px] text-md rounded-md mt-4 text-center w-"
            >
              + Add new Snippet
            </button>
          ) : (
            <p className="text-center font-semibold text-3xl mt-4">
              No Notes Found
            </p>
          )}
        </div>
      )}
    </div>
  );
}
