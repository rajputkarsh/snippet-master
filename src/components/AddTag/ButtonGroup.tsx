import toast from "react-hot-toast";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import {
  ADD_TAG_BUTTON_TAG,
  EDIT_TAG_BUTTON_TAG,
  EMPTY_TAG_NAME_ERROR_MESSAGE,
  TAG_ADDED_SUCCESS_MESSAGE,
  TAG_NAME_ALREADY_EXISTS_ERROR_MESSAGE,
  TAG_UPDATED_SUCCESS_MESSAGE,
} from "@/constants/tags";

interface ButtonGroupProps {
  tagName: string;
  handleErrorMessageChange: (error: string) => void;
}

function ButtonGroup({ tagName, handleErrorMessageChange }: ButtonGroupProps) {
  const {
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    allTagsObject: { allTags, setAllTags },
    darkModeObject: { darkMode },
    tagEditModeObject: { tagEditMode },
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

    if (tagEditMode) {
      setAllTags((prev) => {
        return prev.map((prevTag) => {
          if (prevTag.id === tagEditMode) {
            return {
              ...prevTag,
              name: tagName,
            };
          } else {
            return prevTag;
          }
        });
      });
    } else {
      setAllTags((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: tagName,
        },
      ]);
    }
    setOpenNewTagsWindow(false);
    toast.success(
      tagEditMode ? TAG_UPDATED_SUCCESS_MESSAGE : TAG_ADDED_SUCCESS_MESSAGE
    );
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
        {tagEditMode ? EDIT_TAG_BUTTON_TAG : ADD_TAG_BUTTON_TAG}
      </button>
    </div>
  );
}

export default ButtonGroup;
