import { useGlobalContext } from "@/context";
import TopBar from "../Topbar";
import { isDarkMode } from "@/lib/utils";
import SwiperSelection from "../SwiperSelection";
import AllNotes from "../AllNotes";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
    openNoteContentObject: { openNoteContent },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);  
  return (
    <div
      className={`w-full flex flex-col gap-4 p-5 ${
        isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
      }`}
    >
      <div className={`flex gap-2 ${openNoteContent ? "w-[50%]" : "w-full"}`}>
        <div className="flex flex-col gap-6">
          <TopBar />
          <SwiperSelection />
        </div>
      </div>
      <AllNotes />
    </div>
  );
}

export default ContentArea;
