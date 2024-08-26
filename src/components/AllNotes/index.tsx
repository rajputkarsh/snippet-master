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
  } = useGlobalContext();  

  const [notes, setNotes] = useState<Array<SingleNoteType>>(allNotes);

  const selectedSidebarItem = getSelectedSidebarItem(sidebarMenu);

  useEffect(() => {
    let filteredNotes: Array<SingleNoteType> = [];
    if (selectedSidebarItem.trim().toLowerCase() === "favorites") {
      filteredNotes = allNotes.filter(
        (note) =>
          (note.title.length || note.description.length || note.code.length) &&
          !note.isDeleted &&
          note.isFavorite
      );
    } else if (selectedSidebarItem.trim().toLowerCase() === "trash") {
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
        <div>
          <img src="/no-items-found.webp" />
          <p className="text-center font-semibold text-3xl mt-4">No Notes Found</p>
        </div>
      )}
    </div>
  );
}
