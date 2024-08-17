import { Dispatch, SetStateAction, useState } from "react";
import { SingleNoteType } from "@/interfaces/context";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import {
  CodeOutlined,
  ContentCopyOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { SiJavascript } from "react-icons/si";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { CODE_EDITOR_TEXT_AREA_PLACEHOLDER } from "@/constants/note";

interface INoteContentCodeBlockProps {
  singleNote: SingleNoteType;
  setSingleNote: Dispatch<SetStateAction<SingleNoteType | undefined>>;
}

function NoteContentCodeBlock({
  singleNote,
  setSingleNote,
}: INoteContentCodeBlockProps) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const isDarkModeEnabled = isDarkMode(darkMode);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex gap-2 text-[12px] text-slate-400 mt-8">
      <CodeOutlined
        sx={{ fontSize: 18 }}
        className={`mt-[9px] ${isHovered ? "border-theme" : "text-slate-400"}`}
      />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          isHovered ? "border-theme" : ""
        } border rounded-lg p-3 pt-16 w-full relative`}
      >
        <div className="absolute top-4 right-4 z-50">
          <IconButton>
            <ContentCopyOutlined
              sx={{ fontSize: 18 }}
              className={`${
                isDarkModeEnabled ? "text-white" : "text-slate-400"
              }`}
            />
          </IconButton>
        </div>
        <div
          className={`flex gap-2 justify-between bg-slate-100 p-[6px] px-3 rounded-md items-center text-[12px] mt-3 absolute top-1 left-3 ${
            isDarkModeEnabled
              ? "bg-slate-600 text-white"
              : "bg-slate-100 text-slate-400"
          } cursor-pointer`}
        >
          <div className="flex gap-1 items-center">
            <SiJavascript size={15} className="text-slate-400" />
            <span className="mt-[1ox]">Javascript</span>
          </div>
          <KeyboardArrowDownOutlined sx={{ fontSize: 18 }} />
        </div>
        <AceEditor
          placeholder={CODE_EDITOR_TEXT_AREA_PLACEHOLDER}
          mode="javascript"
          theme="tomorrow"
          name={`code-editor-${singleNote.id}`}
          width="100%"
          height="300px"
          fontSize={14}
          lineHeight={19}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          className={`${
            isDarkModeEnabled ? "bg-transparent text-white" : "bg-white"
          }`}
          value={singleNote.code}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets:false,
            showLineNumbers:false,
            tabSize:2,
          }}
        />
      </div>
    </div>
  );
}

export default NoteContentCodeBlock;
