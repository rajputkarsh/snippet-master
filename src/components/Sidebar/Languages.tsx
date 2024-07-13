import { LANGUAGES_TITLE } from "@/constants/sidebar";
import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";

export default function Languages() {
  return (
    <div className="mt-12 text-sm">
      <div className="font-bold text-slate-400">{LANGUAGES_TITLE}</div>
      <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
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
