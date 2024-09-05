import {
  EMPTY_TAG_NAME_ERROR_MESSAGE,
  TAG_ADDED_SUCCESS_MESSAGE,
  TAG_NAME_ALREADY_EXISTS_ERROR_MESSAGE,
} from "@/constants/tags";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import toast from "react-hot-toast";

interface ButtonGroupProps {
  tagName: string;
  handleErrorMessageChange: (error: string) => void;
}

function ButtonGroup({ tagName, handleErrorMessageChange }: ButtonGroupProps) {
  const {
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    allTagsObject: { allTags, setAllTags },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const handleCancelButton = () => {
    setOpenNewTagsWindow(() => false);
  };

  const handleAddButton = () => {
    if (tagName.trim().length === 0) {
      handleErrorMessageChange(EMPTY_TAG_NAME_ERROR_MESSAGE);
      return;
    }

    if (
      allTags.some(
        (tag) => tag.name.trim().toLowerCase() === tagName.trim().toLowerCase()
      )
    ) {
      handleErrorMessageChange(TAG_NAME_ALREADY_EXISTS_ERROR_MESSAGE);
      return;
    }

    setAllTags((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: tagName,
      },
    ]);
    setOpenNewTagsWindow(false);
    toast.success(TAG_ADDED_SUCCESS_MESSAGE);
  };

  return (
    <div className="flex justify-between mt-6 gap-2 text-[12px]">
      <button
        onClick={handleCancelButton}
        className={`${
          isDarkModeEnabled ? "border-slate-700" : ""
        } border text-[12px] w-full px-10 p-3 rounded-md`}
      >
        Cancel
      </button>{" "}
      <button
        onClick={handleAddButton}
        className=" text-white bg-theme text-[12px] w-full px-10 p-3 rounded-md"
      >
        Add Tag
      </button>
    </div>
  );
}

export default ButtonGroup;
