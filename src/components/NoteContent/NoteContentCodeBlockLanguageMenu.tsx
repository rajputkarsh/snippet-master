import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SingleLanguageType } from "@/interfaces/context";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import { Search } from "@mui/icons-material";
import { SEARCH_TEXT_INPUT_PLACEHOLDER } from "@/constants/note";
import { AVAILABLE_LANGUAGES } from "@/constants/languages";

interface NoteContentCodeBlockLanguageMenuProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

function NoteContentCodeBlockLanguageMenu({
  setIsOpened,
}: NoteContentCodeBlockLanguageMenuProps) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [languages, setLanguages] =
    useState<Array<SingleLanguageType>>(AVAILABLE_LANGUAGES);

  const textRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, [textRef.current]);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => event.target.value.trim().toLowerCase());
  }

  useEffect(() => {
    if (searchQuery.length) {
      const filteredLanguages = AVAILABLE_LANGUAGES.filter((language) => language.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
      setLanguages(() => filteredLanguages);
    }
  }, [searchQuery]);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`${
        isDarkModeEnabled ? "bg-slate-600" : ""
      } absolute flex-col gap-2 p-3 h-[220px] w-[250px] rounded-md bg-slate-100 z-50 flex text-slate-400`}
    >
      <div
        className={`${
          isDarkModeEnabled ? "bg-slate-800" : ""
        } p-1 rounded-md flex gap-1 mb-1`}
      >
        <Search />
        <input
          onChange={onChangeSearch}
          ref={textRef}
          placeholder={SEARCH_TEXT_INPUT_PLACEHOLDER}
          className="bg-transparent outline-none"
        />
      </div>

      <div className="h-40 bg-slate-100 overflow-x-auto">
        {languages.map((language) => (
          <div
            key={language.id}
            className="flex mb-2 gap-2 hover:bg-slate-200 bg-transparent p-[6px] px-3 rounded-md items-center cursor-pointer"
          >
            {language.icon}
            <span className="mt-[1px]">{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteContentCodeBlockLanguageMenu;
