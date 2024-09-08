import { useGlobalContext } from "@/context";
import { AddOutlined, SearchRounded } from "@mui/icons-material";
import {
  TAGS_SEARCH_BUTTON_TEXT,
  TAGS_SEARCH_INPUT_PLACEHOLDER,
} from "@/constants/tags";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SearchbarProps {
  tagSearch: string;
  setTagSearch: Dispatch<SetStateAction<string>>;
}

function Searchbar({ tagSearch, setTagSearch }: SearchbarProps) {
  const {
    openNewTagsWindowObject: { setOpenNewTagsWindow },
  } = useGlobalContext();

  const openAddTagsWindow = () => {
    setOpenNewTagsWindow(() => true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagSearch(() => e.target.value);
  }; 

  return (
    <div className="flex gap-5 items-center justify-between mt-11">
      <div className="flex items-center h-[42px] text-sm rounded-md bg-slate-50 pl-3 gap-1 w-[85%]">
        <SearchRounded className="text-slate-400" />
        <input
          placeholder={TAGS_SEARCH_INPUT_PLACEHOLDER}
          value={tagSearch}
          onChange={handleInputChange}
          className="bg-transparent ouline-none w-full font-light focus:outline-none"
        />
      </div>
      <button
        onClick={openAddTagsWindow}
        className="bg-theme ml-2 p-[10px] flex text-center text-sm rounded-md text-white items-center jusitify-center "
      >
        <AddOutlined sx={{ fontSize: 17 }} />
        <span className="max-md:hidden">{TAGS_SEARCH_BUTTON_TEXT}</span>
      </button>
    </div>
  );
}

export default Searchbar;
