import AddSnippetButton from "./AddSnippetButton";
import { SEARCH_MOBILE_PLACEHOLDER, SEARCH_PLACEHOLDER } from "@/constants/topbar";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import { Search as SearchIcon } from "@mui/icons-material";

export default function SearchBar() {
  const {
    darkModeObject: { darkMode },
    isMobileObject: { isMobile },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);
  return (
    <div
      className={`relative pl-3 w-[60%] h-[38px] rounded-3xl flex items-center gap-2 ${
        isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
      }`}
    >
      <SearchIcon className="text-purple-500" sx={{ fontSize: 13 }} />
      <input
        placeholder={isMobile ? SEARCH_MOBILE_PLACEHOLDER : SEARCH_PLACEHOLDER}
        className={`w-[70%] outline-none text-sm text-slate-500 ${
          isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
        }`}
      />
      <AddSnippetButton />
    </div>
  );
}
