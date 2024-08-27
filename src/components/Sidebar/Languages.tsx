import { ReactNode } from "react";
import { LANGUAGES_TITLE } from "@/constants/sidebar";
import { useGlobalContext } from "@/context";
import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";
import { AVAILABLE_LANGUAGES } from "@/constants/languages";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

export default function Languages() {

  const {
    allNotesObject: { allNotes },
  } = useGlobalContext();

  const usedLanguages = allNotes.map((note) => note.language).filter((language) => !!language);
  const languageUsageObject: {[key: string]: {
    count: number,
    icon: ReactNode
  }} = {};
  
  for (let language of usedLanguages) {
    if(languageUsageObject[language] !== undefined) {
      languageUsageObject[language].count = languageUsageObject[language].count + 1;
    } else {
      languageUsageObject[language] = {
        count: 1,
        icon: AVAILABLE_LANGUAGES.find((lang) => lang.name.trim().toLowerCase() === language.trim().toLowerCase())?.icon
      };
    }
  }

  return (
    <div className="mt-12 text-sm">
      <div className="font-bold text-slate-400">{LANGUAGES_TITLE}</div>
      <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
        {Object.entries(languageUsageObject || {}).map(
          ([language, { icon, count }]) => (
            <div className="flex justify-between">
              <div className="flex gap-1 items-center capitalize">
                {icon}
                {language}
              </div>
              <span className="font-bold">{count}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
