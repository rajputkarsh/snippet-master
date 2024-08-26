import { ReactNode } from "react";
import { LANGUAGES_TITLE } from "@/constants/sidebar";
import { useGlobalContext } from "@/context";
import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";
import { AVAILABLE_LANGUAGES } from "@/constants/languages";

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

        {

        }

        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <SiJavascript size={15} />
            Javascript
          </div>
          <span className="font-bold">3</span>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <SiPython size={15} />
            Python
          </div>
          <span className="font-bold">10</span>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <SiCplusplus size={15} />
            C++
          </div>
          <span className="font-bold">7</span>
        </div>
      </div>
    </div>
  );
}
