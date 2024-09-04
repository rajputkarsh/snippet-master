import { useEffect, useRef } from "react";
import { useGlobalContext } from "@/context"
import { isDarkMode } from "@/lib/utils";
import Header from "./Header";
import TagInput from "./TagInput";
import ButtonGroup from "./ButtonGroup";

function AddTag() {

  const {
    darkModeObject: { darkMode }
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

    const {
    openNewTagsWindowObject: {
      setOpenNewTagsWindow,
    },
  } = useGlobalContext();
  
  const tagsWindowRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tagsWindowRef.current &&
        !tagsWindowRef.current.contains(event.target as Node)
      ) {
        setOpenNewTagsWindow(() => false);
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
      ref={tagsWindowRef}
      style={{
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        top: "20%",
      }}
      className={`fixed z-20 px-4 py-2 max-sm:w-[350px] w-[500px] shadow-md ${isDarkModeEnabled ? "bg-slate-800 text-white" : "bg-white border"} rounded-md`}
    >
      <Header />
      <TagInput />
      <ButtonGroup />
    </div>
  );
}

export default AddTag