import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";

interface ButtonGroupProps {
  tagName: string;
  handleErrorMessageChange: (error: string) => void;
}

function ButtonGroup({}: ButtonGroupProps) {
  const {
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const handleCancelButton = () => {
    setOpenNewTagsWindow(() => false);
  };

  const handleAddButton = () => {};

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

export default ButtonGroup