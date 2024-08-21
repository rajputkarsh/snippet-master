
import { AVAILABLE_LANGUAGES } from "@/constants/languages";
import { SingleLanguageType } from "@/interfaces/context";
import { DeleteRounded } from "@mui/icons-material";
import { SiJavascript } from "react-icons/si";

interface NoteFooterProps {
  language: string;
}

function NoteFooter({ language }: NoteFooterProps) {

  const currentLanguage: SingleLanguageType =
    AVAILABLE_LANGUAGES.find(
      (lang) => lang.name.trim().toLowerCase() === language.trim().toLowerCase()
    ) || AVAILABLE_LANGUAGES[0];

  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center">
        {currentLanguage.icon}
        <span className="capitalize">{currentLanguage.name}</span>
      </div>
      <DeleteRounded sx={{ fontSize: 17 }} className="cursor-pointer" />
    </div>
  );
}

export default NoteFooter