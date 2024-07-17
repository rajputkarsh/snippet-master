import { SNIPPET } from "@/constants/config";
import { SEARCH_PLACEHOLDER } from "@/constants/topbar";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import { Search as SearchIcon } from "@mui/icons-material";

function AddSnippetButton() {
  return (
    <div className="absolute flex gap-2 px-3 rounded-3xl bg-purple-600 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none">
      <div className="font-bold">+</div>
      <div className="max-md:hidden">{SNIPPET}</div>
    </div>
  );
}

export default function SearchBar() {
  const {
    darkModeObject: { darkMode },
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
        placeholder={SEARCH_PLACEHOLDER}
        className={`w-[70%] outline-none text-sm text-slate-500 ${
          isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
        }`}
      />
      <AddSnippetButton />
    </div>
  );
}
