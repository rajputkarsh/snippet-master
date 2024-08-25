import { UNDO } from "@/constants/config";
import { AVAILABLE_LANGUAGES } from "@/constants/languages";
import { NOTE_DELETED_TEXT } from "@/constants/note";
import { useGlobalContext } from "@/context";
import { SingleLanguageType } from "@/interfaces/context";
import { getSelectedSidebarItem } from "@/lib/utils";
import { DeleteRounded, Replay, RestoreFromTrashOutlined } from "@mui/icons-material";
import { useState } from "react";
import toast from "react-hot-toast";
import DeletionConfirmationPopup from "./DeletionConfirmationPopup";

interface NoteFooterProps {
  id: string;
  language: string;
}

function NoteFooter({ id, language }: NoteFooterProps) {
  const {
    allNotesObject: { allNotes, setAllNotes },
    sidebarMenuObject: { sidebarMenu },
  } = useGlobalContext();
  
  const [showDeletionConfirmationPopup, setShowDeletionConfirmationPopup] = useState<boolean>(false);

  const isTrashItem =
    getSelectedSidebarItem(sidebarMenu).trim().toLowerCase() === "trash";

  const currentLanguage: SingleLanguageType =
    AVAILABLE_LANGUAGES.find(
      (lang) => lang.name.trim().toLowerCase() === language.trim().toLowerCase()
    ) || AVAILABLE_LANGUAGES[0];

  const handleNoteDelete = (shouldDelete: boolean = true) => {
    const newAllNotes = allNotes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          isDeleted: shouldDelete,
        };
      }
      return note;
    });
    setAllNotes((_) => newAllNotes);

    if (shouldDelete) {
      toast((t) => (
        <div className="flex gap-2 items-center">
          <span>{NOTE_DELETED_TEXT}</span>
          <button
            className="bg-theme p-[4px] px-3 text-sm text-white rounded-md flex gap-1 items-center"
            onClick={() => {
              toast.dismiss(t.id);
              handleNoteDelete(false);
            }}
          >
            <Replay sx={{ fontSize: 17 }} />
            <span>{UNDO}</span>
          </button>
        </div>
      ));
    }
  };

  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center">
        {currentLanguage.icon}
        <span className="capitalize">{currentLanguage.name}</span>
      </div>
      <div className="flex gap-2 items-center">
        {isTrashItem && (
          <RestoreFromTrashOutlined
            onClick={() => {
              handleNoteDelete(false);
            }}
            sx={{ fontSize: 17 }}
            className="cursor-pointer"
          />
        )}
        <DeleteRounded
          onClick={() => {
            if (isTrashItem) return;
            
            setShowDeletionConfirmationPopup(true);
          }}
          sx={{ fontSize: 17 }}
          className={`${isTrashItem ? "text-theme" : ""} cursor-pointer`}
        />
      </div>
      {showDeletionConfirmationPopup && <DeletionConfirmationPopup handleAction={() => handleNoteDelete(true)} handleClose={() => setShowDeletionConfirmationPopup(false)}  /> }
    </div>
  );
}

export default NoteFooter;
