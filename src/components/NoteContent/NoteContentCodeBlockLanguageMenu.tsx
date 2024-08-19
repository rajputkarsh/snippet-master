import { useEffect, useRef, useState } from "react";
import { SingleLanguageType } from "@/interfaces/context";
import { SiJavascript, SiPython } from "react-icons/si";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import { Search } from "@mui/icons-material";
import { SEARCH_TEXT_INPUT_PLACEHOLDER } from "@/constants/note";

function NoteContentCodeBlockLanguageMenu() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

    const isDarkModeEnabled = isDarkMode(darkMode);

  const [allLanguages, setAllLanguages] = useState<Array<SingleLanguageType>>([
    {
      id: crypto.randomUUID(),
      name: "Javascript",
      icon: <SiJavascript size={15} className="text-slate-400" />,
    },
    {
      id: crypto.randomUUID(),
      name: "Python",
      icon: <SiPython size={15} className="text-slate-400" />,
    },
  ]);

  const textRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, [textRef.current]);

  return (
    <div className={`${isDarkModeEnabled ? "bg-slate-600" : ""} absolute flex-col gap-2 p-3 w-[200px] rounded-md bg-slate-100 z-50 flex text-slate-400`}>
      <div className={`${isDarkModeEnabled ? "bg-slate-800" : ""} p-1 rounded-md flex gap-1 mb-1`}>
        <Search />
        <input 
          ref={textRef}
          placeholder={SEARCH_TEXT_INPUT_PLACEHOLDER}
          className="bg-transparent outline-none"
        />
      </div>

      <div>
        {
          allLanguages.map((language) => (
            <div key={language.id} className="flex mb-2 gap-2 hover:bg-slate-200 bg-transparent p-[6px] px-3 rounded-md items-center">
              {language.icon}
              <span className="mt-[1px]">{language.name}</span>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default NoteContentCodeBlockLanguageMenu;
