import { ADD_NEW_TAG_HEADER } from "@/constants/tags";
import { useGlobalContext } from "@/context"
import { isDarkMode } from "@/lib/utils";
import { Close } from "@mui/icons-material";

function Header() {
  const {
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const closeDialog = () => {
    setOpenNewTagsWindow(() => false);
  }

  return (
    <div className="flex justify-between items-center rounded-lg">
      <div className="flex items-center gap-2">
        <span className={`text-[18px] font-bold ${isDarkModeEnabled ? "text-white" : "text-slate-600"}`}>
          {ADD_NEW_TAG_HEADER}
        </span>
      </div>
      <div>
        <Close
          sx={{ fontSize: 18 }}
          className="text-slate-400 cursor-pointer"
          onClick={closeDialog}
        />
      </div>
    </div>
  );
}

export default Header