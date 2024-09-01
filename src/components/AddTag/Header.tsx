import { ADD_NEW_TAG_HEADER } from "@/constants/tags";
import { useGlobalContext } from "@/context"
import { Close } from "@mui/icons-material";

function Header() {
  const {
    openNewTagsWindowObject: { setOpenNewTagsWindow },
  } = useGlobalContext();

  const closeDialog = () => {
    setOpenNewTagsWindow(() => false);
  }

  return (
    <div className="flex justify-between items-center rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-[18px] text-slate-600 font-bold">
          {ADD_NEW_TAG_HEADER}
        </span>
      </div>
      <div>
        <Close 
          sx={{fontSize: 18}}
          className="text-slate-400 cursor-pointer"
          onClick={closeDialog}
        />
      </div>
    </div>
  )
}

export default Header