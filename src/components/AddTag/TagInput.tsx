import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/context";
import {
  TAG_NAME_LABEL_TEXT,
  TAG_NAME_PLACEHOLDER_TEXT,
} from "@/constants/tags";
import { isDarkMode } from "@/lib/utils";

interface TagInputProps {
  tagName: string;
  errorMessage: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleErrorMessageChange: (error: string) => void;
}

function TagInput({ tagName, handleInputChange }: TagInputProps) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="mt-6">
      <span className="text-slate-400 text-sm font-semibold">
        {TAG_NAME_LABEL_TEXT}
      </span>
      <input
        ref={inputRef}
        value={tagName}
        onChange={handleInputChange}
        placeholder={TAG_NAME_PLACEHOLDER_TEXT}
        className={`${
          isDarkModeEnabled ? "bg-slate-700" : "bg-white border text-slate-600"
        } w-full rounded-md p-2 mt-1 text-[12px] outline-none`}
      />
    </div>
  );
}

export default TagInput;
